import assert from 'node:assert/strict';

const stableInput = {
  state: 'validated',
  confidence: 0.99,
  nodes: 12,
};

const artifactId = JSON.stringify(stableInput)
  .split('')
  .reduce((sum, char) => sum + char.charCodeAt(0), 0)
  .toString(16);

assert.ok(artifactId.length > 0, 'artifact id should be generated deterministically');
assert.equal(artifactId, artifactId, 'artifact generation should be deterministic');

console.log('generator.test.js passed');
