The solution is to standardize how database references are obtained.  Always use a single, consistently obtained reference throughout your application.  This avoids the problem of multiple references pointing to the same data but behaving inconsistently. 

Here's how to fix it in JavaScript:

```javascript
// Get a single reference and use it everywhere
const databaseRef = firebase.database().ref(); // or firebase.database().ref('/myData')

databaseRef.child('myData').set({ ... }); // Use this consistent reference

// Avoid direct path references like this
// firebase.database().ref('/myData').set({...});
```

By using the same `databaseRef` throughout your application, you ensure consistency and proper persistence of data even across sessions.