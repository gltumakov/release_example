import test from 'node:test'
import assert from 'node:assert/strict'

function add(a, b) {
    return a + b
}

test('simple test', (t) => {
    t.test('add two numbers', () => {
        const result = add(1, 1)

        assert.equal(result, 2, 'Should be 2')
    })
})
