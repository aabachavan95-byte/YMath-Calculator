
import { TOPICS } from './constants';

const keys = TOPICS.map(t => t.key);
const duplicates = keys.filter((item, index) => keys.indexOf(item) !== index);

if (duplicates.length > 0) {
  console.log('Duplicate top-level keys found:', duplicates);
} else {
  console.log('No duplicate top-level keys found.');
}

TOPICS.forEach(topic => {
  if (topic.subTopics) {
    const subKeys = topic.subTopics.map(st => st.key);
    const subDuplicates = subKeys.filter((item, index) => subKeys.indexOf(item) !== index);
    if (subDuplicates.length > 0) {
      console.log(`Duplicate sub-keys found in topic "${topic.key}":`, subDuplicates);
    }
  }
});
