import React from 'react';
import { TOPICS } from './constants';

const keys = TOPICS.map(t => t.key);
const counts = {};
keys.forEach(k => {
  counts[k] = (counts[k] || 0) + 1;
});

for (const k in counts) {
  if (counts[k] > 1) {
    console.log(`Duplicate key in TOPICS: ${k} (count: ${counts[k]})`);
  }
}
