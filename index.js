// Import Express and Axios
import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

// Prime number checking function
const isPrime = (num) => {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num === 2) return true; // 2 is the only even prime number

    // Check divisibility from 2 to num-1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // If divisible, not a prime number
        }
    }

    return true; // If no divisors found, it's a prime number
};

// Route to check if a number is prime
app.get('/check-prime/:number', (req, res) => {
    const number = parseInt(req.params.number, 10);

    if (isNaN(number)) {
        return res.status(400).send('Invalid number');
    }

    const result = isPrime(number);

    res.send(`The number ${number} is ${result ? 'a prime' : 'not a prime'} number.`);
});

// Start the server
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);

    // Simulate requests to the server using Axios
    const simulateRequests = () => {
        // Initiate both requests

        axios.get(`http://localhost:${port}/check-prime/8`)
            .then(response2 => {
                console.log(response2.data);
            })
            .catch(error => {
                console.error('Error with second request:', error.message);
            });

        axios.get(`http://localhost:${port}/check-prime/999999937`)
            .then(response1 => {
                console.log(response1.data);
            })
            .catch(error => {
                console.error('Error with first request:', error.message);
            });

        axios.get(`http://localhost:${port}/check-prime/10`)
            .then(response2 => {
                console.log(response2.data);
            })
            .catch(error => {
                console.error('Error with second request:', error.message);
            });
    };

    // Call the function to simulate requests
    simulateRequests();
});