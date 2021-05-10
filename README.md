# programming-practice

Solutions to the problems found at
[adriann.github.io](https://adriann.github.io/programming_problems.html)
among notes and other things.

Here are the problems:
    Elementary:

    * Write a program that prints ‘Hello World’ to the screen.
    * Write a program that asks the user for their name and greets them with their name.
    * Modify the previous program such that only the users Alice and Bob are greeted with their names.
    * Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
    * Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
    * Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
    * Write a program that prints a multiplication table for numbers up to 12.
    * Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary size numbers, printing all primes up to the largest number you can easily represent is fine too.)
    * Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.
    * Write a program that prints the next 20 leap years.
    * Write a program that computes the sum of an alternating series where each element of the series is an expression of the form ((−1)k+1)/(2*k−1)((-1)^{k+1})/(2 * k-1) for each value of kk from 1 to a million, multiplied by 4. Or, in more mathematical notation

    Lists, Strings:

    * Write a function that returns the largest element in a list.
    * Write function that reverses a list, preferably in place.
    * Write a function that checks whether an element occurs in a list.
    * Write a function that returns the elements on odd positions in a list.
    * Write a function that computes the running total of a list.
    * Write a function that tests whether a string is a palindrome.
    * Write three functions that compute the sum of the numbers in a list: using a for-loop, a while-loop and recursion. (Subject to availability of these constructs in your language of choice.)
    * Write a function on_all that applies a function to every element of a list. Use it to print the first twenty perfect squares. The perfect squares can be found by multiplying each natural number with itself. The first few perfect squares are 1*1= 1, 2*2=4, 3*3=9, 4*4=16. Twelve for example is not a perfect square because there is no natural number m so that m*m=12. (This question is tricky if your programming language makes it difficult to pass functions as arguments.)
    * Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
    * Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
    * Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5] → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a sort.
    * Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?
    * Write a function that computes the list of the first 100 Fibonacci numbers. The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
    * Write a function that takes a number and returns a list of its digits. So for 2342 it should return [2,3,4,2].
    * Write functions that add, subtract, and multiply two numbers in their digit-list representation (and return a new digit list). If you’re ambitious you can implement Karatsuba multiplication. Try different bases. What is the best base if you care about speed? If you couldn’t completely solve the prime number exercise above due to the lack of large numbers in your language, you can now use your own library for this task.
    * Write a function that takes a list of numbers, a starting base b1 and a target base b2 and interprets the list as a number in base b1 and converts it into a number in base b2 (in the form of a list-of-digits). So for example [2,1,0] in base 3 gets converted to base 10 as [2,1].
    * Implement the following sorting algorithms: Selection sort, Insertion sort, Merge sort, Quick sort, Stooge Sort. Check Wikipedia for descriptions.
    * Implement binary search.

    * Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:

    *********
    * Hello *
    * World *
    * in    *
    * a     *
    * frame *
    *********

    * Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
