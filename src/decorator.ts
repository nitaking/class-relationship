function foo(value: string) { // ここがデコレータ・ファクトリー
    console.debug('value', value)
    return function (target) { // ここがデコレータ
        // 'value'と'target'を使って処理を書く
    }
}

// @fooデコレータの宣言（引数あり）
@foo('foo')
@foo('hoge')
class Baa{
}
