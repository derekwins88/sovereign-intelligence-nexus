import assert from 'node:assert/strict';

function generateArtifactId(inputVector) {
  return Buffer.from(JSON.stringify(inputVector)).toString('base64url');
}

const payload = { source: 'input-vector', state: 'validated' };
const first = generateArtifactId(payload);
const second = generateArtifactId(payload);

assert.equal(first, second, 'artifact generation should be deterministic');
assert.ok(first.length > 0, 'artifact id should not be empty');

console.log('generator.test.js passed');
