# How to Handle Async Operations Using Async/Await Over Callbacks and Promises in TypeScript

When we work with tasks like fetching data from an API, reading files, or waiting for a response from a database, these tasks don’t finish right away—they are asynchronous (async for short). TypeScript has a great tool called `async/await` that helps us handle async tasks in a way that's simple and easy to read. In this blog, we’ll look at how `async/await` works and why it’s often better than using callbacks or promises.

## Why Use Async/Await?

Before `async/await`, we used callbacks and promises for async tasks. But each approach has some problems:

1. **Callbacks** can lead to “callback hell”—when you have many nested callbacks, the code can be hard to read and messy.
2. **Promises** improved things, but chaining `.then()` and `.catch()` for each async task can still make the code hard to follow.

With `async/await`, we can write async code that looks like normal code, making it easier to read and manage.

## How Async/Await Works

The `async` keyword makes a function async, meaning it will return a promise automatically. Inside this async function, we can use the `await` keyword to pause the code until an async task (a promise) is finished.

### Basic Example

Here’s a simple example to show how `async/await` works:

```typescript
// Function that returns a promise
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
}

// Using async/await to handle the promise
async function getData() {
  console.log("Fetching data...");
  const data = await fetchData(); // Pauses until fetchData finishes
  console.log(data);
}

getData();
