import test from 'ava';
import m from '../src/default';

test('Array.prototype.concat', t => {
    const a = m([1, 2, 3]);
    const b = m([4, 5, 6]);
    const c = a.concat(b);
    t.deepEqual(a.concat(b), [1, 2, 3, 4, 5, 6]);
    t.deepEqual(a, [1, 2, 3]);
});

test('Array.prototype.copyWithin', t => {
    const a = m([1, 2, 3, 4, 5, 6]);
    t.deepEqual(a.copyWithin(2, 1, 4), [[1, 2, 2, 3, 4, 6], [1, 2, 2, 3, 4, 6]]);
    t.deepEqual(a, [1, 2, 3, 4, 5, 6]);
});

test('Array.prototype.push', t => {
    const a = m([1, 2, 3]);
    t.deepEqual(a.push(4), [[1, 2, 3, 4], 4]);
    t.deepEqual(a.push([4, 5]), [[1, 2, 3, [4, 5]], 4]);
    t.deepEqual(a, [1, 2, 3]);
});

test('Array.prototype.slice', t => {
    const a = m([1, 2, 3, 4, 5]);
    t.deepEqual(a.slice(1), [2, 3, 4, 5]);
    t.deepEqual(a.slice(2, 4), [3, 4]);
    t.deepEqual(a, [1, 2, 3, 4, 5]);
});

test('Array.prototype.splice', t => {
    const a = m([1, 2, 3, 4, 5]);
    t.deepEqual(a.splice(1), [[1], [2, 3, 4, 5]]);
    t.deepEqual(a.splice(2, 4), [[1, 2], [3, 4, 5]]);
    t.deepEqual(a, [1, 2, 3, 4, 5]);
});

test('Array.prototype.pop', t => {
    const a = m([1, 2, 3, 4, 5]);
    t.deepEqual(a.pop(), [[1, 2, 3, 4], 5]);
    t.deepEqual(a, [1, 2, 3, 4, 5]);
});

test('Array.prototype.shift', t => {
    const a = m([1, 2, 3, 4, 5]);
    t.deepEqual(a.shift(), [[2, 3, 4, 5], 1]);
    t.deepEqual(a, [1, 2, 3, 4, 5]);
});