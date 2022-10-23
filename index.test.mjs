import test from 'node:test'
import assert from 'node:assert/strict'

function add(a, b) {
    return a + b
}

test('simple test', (t) => {
    t.test('add two numbers', () => {
        assert.equal(add(1, 1), 2, 'Should be 2')
    })
})
