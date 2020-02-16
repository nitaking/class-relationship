# class-relationship

## About
- このライブラリはdomain-driven-developmentを実現するための一助となるツールを提供するものである
- クラスをappendする形でrelationを構築し、各ドメインモデルを連結する情報を簡潔に設定する

## 背景
- Q. ドメインモデルは再利用すべきか、否か？

```text
ex)
以下のドメインモデルが存在するとき、

- User
  - Favorite
    - Book
- Service
  - Book

User/Favorite/Bookと、Service/Bookは同じ概念であるが、異なる文脈のため、使用するプロパティが別々である。
これはそれぞれ定義してしまうべきなのか・・・？ A. No!
1概念モデルは1Modelを定義し、複数参照される場合にはそれぞれリレーションを定義すべきである！

つまり
ModelParts
- Book

BaseModel
- User
- Service
```

## How to
### model instance

- Use facade pattern.

```js
// 単体モデル
const user = UserService.getUser(whereCondition)
const userWithPayment = facade.applyModel(user, Payment)
const purchasePayment = userWithPayment.payments.purchased // ユーザーの決済済みデータ

// 複数モデル
const user = UserService.getUser(whereCondition)
const userWithPayment = facade.applyModelArray(users, Payment)
const purchasePayment = userWithPayment.payments.purchased // ユーザーの決済済みデータ
```

### Setting model relations

```js
class Book {}

class Favorite {
  static relationship = {
    book: Book,
  }
}

class Payment {}

class User {
  static relationship = {
    favorite: Favorite,
    payment: Payment,
  }
}
```
