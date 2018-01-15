
var le = '&le;', ge = '&ge;', lt = '&#60;', gt = '&#62;';

var questions = 

	{

		1 : {

			'questionStatement': "You are given two set of points. The first set is determined by the equation A<sub>1</sub>x + B<sub>1</sub>y + C<sub>1</sub> = 0, and the second one is determined by the equation A<sub>2</sub>x + B<sub>2</sub>y + C<sub>2</sub> = 0. Write the program which finds the number of points in the intersection of two given sets.<br><h4>Input Format</h4>The first line of the input contains three integer numbers A<sub>1</sub>, B<sub>1</sub>, C<sub>1</sub> separated by space. The second line contains three integer numbers A<sub>2</sub>, B<sub>2</sub>, C<sub>2</sub> separated by space. All the numbers are between -100 and 100, inclusive.<br><h4>Output Format</h4>Print the number of points in the intersection or -1 if there are infinite number of points.<br><h4>Sample Input</h4><code>1 1 0 <br>2 2 0</code><h4>Sample Output</h4><code>-1</code><h4>Test case:</h4><code>1 1 0 <br>2 -2 0</code>",
			'attempts' : 1,
			'solved' : false,
			'attempted' : false,
			'score' : 10,
			'answer' : "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"

		},

		2 : {
			'questionStatement': "Shounak Dey is a legend. He has secured an All India Rank of 25 in JEE Mains 2010 Examination. His batchmates are looking for a treat. They always come in a group to him for demanding treat. But Shounak has a lot of expenses to cover and will be able to give treat to only few of them. To decide the group of people eligible for the treat, he uses the following criteria: People in group must belong to same hostel and everyone in group must be lower or equally (rank >=15) ranked to him.<br>Can you find out whether a group gets the treat? <br>Note: Here hostel_id identifies each hostel uniquely.<br><h4>Input format</h4>First line contains <b>N</b>, the number of people in a group. Second line contains <b>N</b> space separated integers hostel_id[1], hostel_id[2] ....hostel_id[n], where hostel_id[i] denotes the hostel id of ith person in group. Third line contains <b>N</b> space separated integers rank[1], rank[2] ..rank[n], where rank[i] denotes the rank of ith person in the group.<br><h4>Output format</h4>Print 'Party'(without quotes) if the group gets the treat else print 'No Party' (without quotes) on a separate line.<br><h4>Sample Input</h4><code>5 <br>1 1 1 1 6 <br>12 10 5 20 25 <br></code><h4>Sample Output</h4><code>No Party</code><h4>Test Case</h4><code>10 <br>2 2 2 2 2 2 2 2 2 2 <br>101 233 4775 76 33 24 7790 990 2002 26</code>",
			'attempts' : 1,
			'solved' : false,
			'attempted' : false,
			'score' : 10,
			'answer' : "157e121903e548067d08b9606cf1f431a97416a3184ea21f49f7c281ba95f432"

		},

		3 : {

			'questionStatement': "Given a number <b>N</b>, the task is to count all the digits in <b>N</b> which divide <b>N</b>. Divisibility by 0 is not allowed. If any digit in <b>N</b> which is repeated and divides <b>N</b>, then all repetitions of that digit should be counted<h4>Input Format</h4>The first line of each test case contains the integer <b>N</b><h4>Output Format</h4>Print the count of all digits of <b>N</b> in a new line.<h4>Sample Input</h4><code>35</code><h4>Sample Output</h4><code>1</code><h4>Explaination</h4>3 doesnt divide 35 but 5 does<h4>Test Case</h4><code>123456789012354673</code>",
			'attempts' : 2,
			'solved' : false,
			'attempted' : false,
			'score' : 10,
			'answer' : "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"

		},

		4 : {

			'questionStatement': "<p>We know that prime numbers are positive integers that have exactly two distinct positive divisors.Similarly, we'll call a positive integer <b>t</b> a T-prime number, if <b>t</b> has exactly three distinct positive divisors. For a given number <b>n</b> which is a T-prime, find and print its factors.</p><h4>Input Format</h4>One line consisting of an integer <b>n</b><h4>Output Format</h4>Print the divisors of the given T-prime number separated by spaces.<h4>Sample Input</h4><code>4</code><h4>Sample Output</h4><code>1 2 4</code><h4>Explanation</h4>4 has three divisors 1,2 and 4 </p><h4>Test Case</h4><code>306660105361</code>",
			'attempts' : 2,
			'solved' : false,
			'attempted' : false,
			'score' : 10,
			'answer' : "6b879b57d21a10081c154e0810acd62ccd774ab020d8ace96ba29c5aef7cc3cf"

		},

		5 : {

			'questionStatement' : "<div>A chocolate factory produces bars of chocolate, the faces of which are plain and have dimension <b>m</b>&nbsp;x&nbsp;<b>n</b>. They wish to make divisions on this face so that it becomes easier to break the bar into pieces. They also want each piece to be a square and all pieces be equal in size. Given the values of <b>m</b> and <b>n</b> help them calculate the minimum number of pieces a single bar can be divided into.<h4>Input Format</h4>The first and only line contains two space separated integers <b>m</b> and <b>n</b>.<h4>Output Format</h4>Output a single number denoting the number of pieces.<h4>Sample Input</h4><code>10 15</code><h4>Sample Output</h4><code>6</code><h4>Explanation</h4>The bar can be divided into 6 square pieces of dimension 5&nbsp;x&nbsp;5.<h4>Test Case</h4><code>61724 33236</code></div>",
			'attempts' : 3,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "1da51b8d8ff98f6a48f80ae79fe3ca6c26e1abb7b7d125259255d6d2b875ea08"

		},

		6 : {

			'questionStatement' : "Prashanth loves games! But he likes to invent his own. Now he plays game 'Number Jump'. Prashanth has sequence of digits <b>S<sub>1</sub>,S<sub>2</sub>,...,S<sub>N</sub></b>. He is staying in the first digit <b>(S<sub>1</sub>) </b>and want to reach the last digit <b>(S<sub>N</sub>)</b> in the minimal number of jumps. While staying in some digit <b>x</b> with index <b>i</b> (digit <b>S<sub>i</sub></b>) Prashanth can jump into digits with indices <b>i - 1 (S<sub>i-1</sub>)</b> and <b>i + 1 (S<sub>i+1</sub>)</b> but he can't jump out from sequence. Or he can jump into any digit with the same value <b>x</b>. Help Prashanth to find the minimal number of jumps he need to reach digit <b>S<sub>N</sub></b> from digit <b>S<sub>1</sub></b>.<br><br><h4>Input Format</h4>Input contains a single line consist of string <b>S</b> of length <b>N</b>- the sequence of digits.<h4>Output Format</h4><br>In a single line print single integer - the minimal number of jumps he needs.<br><h4>Sample Input 1</h4><br><code>01234567890</code><h4>Sample Output 1</h4><code>1</code><h4>Sample Input 2</h4><code>012134444444443</code><h4>Sample Output</h4><code>4</code><h4>Explanation:</h4>In the first case Prashanth can directly jump from the first digit (it is 0) to the last (as it is also 0).<br>In the second case he should jump in such sequence (the number of digits from 1: 1-2-4-5-15)<br><h4>Test Case</h4><code>007683478968398926579697926548634583741</code>",
			'attempts' : 3,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"

		},

		7 : {

			'questionStatement': "Today is Rohit's friend's birthday. He wants to give a gift to his friend. So he was desperately searching for some gift here and there. <br>Fortunately, he found an array <b>a</b> of size <b>n</b> lying around. The array contains positive integers. Rohit's friend likes even numbers very much. So for the gift, he will choose a <i>consecutive non-empty</i> segment of the array. The segment should contain exactly <b>k</b> even integers. Though it can have any number of odd integers. He will then pick that segment and gift it to his friend. He also needs to make sure that the size of this segment is as minimal as possible.<br> You need to help him find the size of this minimal segment.<br><h4>Input Format</h4>First line of the input contains a single integer <b>T</b> denoting number of test cases.<br>For each test case, first line contains 2 space separated integers <b>n</b> and <b>k</b> denoting the size of the array and the required number of even integers. Next line contains <b>n</b> space separated integers denoting contents of array <b>a</b>.<br><h4>Output Format</h4>Print <b>T</b> integers separated by spaces where each k<sup>th</sup> integer denotes the answer for the k<sup>th</sup> test case.<br>It is guaranteed that there are at least <b>k</b> even numbers in the array for a specific test case.<h4>Sample Input</h4><code>3<br>6 2<br>7 4 2 9 8 1<br>7 3<br>1 4 2 11 13 6 9<br>10 3<br>7 6 3 41 12 17 1 2 9 6<br></code><h4>Sample Output</h4><code>2 5 6</code><h4>Test Case</h4><code>2<br>2000 729<br>100 5 51 75 19 18 69 72 57 33 75 53 22 93 76 33 99 9 6 87 68 7 91 45 46 5 94 59 20 1 59 83 81 39 97 7 49 59 43 30 32 72 91 13 5 74 35 76 70 31 8 71 55 16 66 15 71 32 94 76 81 38 50 51 57 48 13 20 62 50 56 38 75 53 6 26 11 72 43 43 82 10 41 100 5 76 83 53 17 38 10 79 44 50 41 63 37 78 27 29 99 11 98 11 29 33 13 80 10 50 83 97 95 93 75 23 99 15 16 58 95 9 37 64 85 36 72 55 95 93 18 85 94 86 85 43 68 100 24 20 76 67 2 94 27 66 82 58 16 60 47 9 37 35 74 97 6 27 90 60 41 36 88 71 44 88 73 49 42 32 8 56 58 16 87 79 81 81 31 6 35 49 7 62 54 86 100 80 66 77 62 80 33 29 39 69 73 16 12 54 85 44 50 10 58 49 64 42 56 8 16 53 57 70 30 94 90 19 92 38 56 88 56 42 58 20 68 68 18 31 23 96 65 49 20 86 89 55 42 57 60 69 21 2 9 45 17 86 79 5 5 54 94 74 84 77 89 16 55 51 69 40 100 16 23 19 49 27 73 32 1 75 71 68 63 84 60 43 58 75 83 13 77 68 17 71 80 3 7 57 80 69 69 25 20 40 48 72 73 88 98 52 37 64 54 71 48 65 13 33 49 72 34 31 65 29 5 22 76 17 38 6 15 84 55 73 42 48 73 70 54 13 40 81 77 45 62 11 98 86 35 39 96 88 28 14 40 44 93 31 11 54 80 8 33 45 27 81 39 86 10 82 93 60 77 12 42 94 97 58 35 59 81 98 69 9 82 10 36 58 74 12 27 10 48 69 87 63 27 47 21 86 30 67 48 8 15 56 9 45 4 16 39 41 38 57 53 2 58 56 37 4 54 18 6 58 96 95 76 95 27 49 16 45 6 92 95 50 18 13 92 8 20 42 59 29 42 10 62 29 93 43 64 98 27 99 48 100 34 14 24 82 89 15 88 95 81 35 83 26 61 74 17 60 75 38 19 22 33 14 77 53 45 46 93 59 87 39 65 72 74 49 89 73 22 88 92 24 92 95 18 45 78 34 35 32 83 27 59 7 65 63 62 17 67 42 6 85 70 41 29 77 56 23 31 81 11 87 28 6 94 34 90 93 44 38 69 67 92 27 40 8 27 4 50 5 15 32 25 92 52 57 96 53 94 36 35 67 94 90 34 57 73 36 83 65 72 55 64 94 6 13 39 89 24 5 40 55 8 93 48 77 23 97 20 27 7 97 58 69 32 77 52 98 56 40 46 80 57 58 70 62 22 19 99 82 33 90 22 23 31 35 69 92 92 64 22 14 68 67 77 99 49 97 41 56 78 14 31 34 39 47 74 30 46 71 27 14 47 13 60 2 90 96 92 86 72 16 67 58 44 34 36 21 78 9 56 98 38 86 74 29 100 66 41 62 26 23 74 34 16 71 37 18 75 37 6 16 12 23 46 59 95 15 49 6 38 57 37 93 83 32 49 64 73 37 58 19 32 82 8 4 90 43 79 39 25 58 41 32 15 84 30 91 13 66 4 28 45 66 50 53 21 96 24 3 99 80 45 94 34 76 23 21 7 35 28 36 46 29 9 20 7 70 4 62 74 68 1 73 64 54 41 41 100 35 90 94 13 93 26 91 63 14 70 86 17 5 29 2 78 64 11 67 84 73 29 88 39 88 2 5 9 47 28 45 66 12 47 58 38 43 2 72 29 58 81 77 43 54 44 11 3 23 29 15 95 35 55 89 43 27 75 8 73 48 20 76 53 42 22 44 20 96 88 97 26 91 75 2 60 15 37 61 72 28 31 26 35 3 86 67 20 84 26 98 94 10 25 13 53 5 31 76 79 29 28 15 56 10 84 62 5 78 57 78 100 91 90 25 8 18 92 73 58 96 70 27 50 23 85 46 33 73 57 7 46 21 16 87 86 10 47 32 31 96 35 76 6 65 57 6 21 69 85 1 6 57 55 35 50 92 15 24 73 36 83 13 45 87 66 10 50 53 43 43 84 95 16 59 6 42 99 88 81 41 7 99 70 76 79 62 43 68 82 36 74 24 5 70 61 16 50 79 41 62 58 59 91 30 17 82 60 34 71 6 11 22 60 45 75 43 76 68 84 67 99 76 69 46 23 8 4 37 89 16 18 40 52 66 44 31 32 74 96 54 85 14 29 94 32 75 98 56 87 44 15 10 18 65 30 18 21 65 10 70 65 35 66 79 96 43 93 50 42 14 10 55 68 98 62 12 41 59 77 63 27 65 31 82 32 5 39 19 42 81 63 13 8 85 47 49 62 41 67 70 88 38 52 2 18 97 51 85 73 88 39 36 31 6 48 84 16 49 35 40 91 44 77 20 62 47 74 60 87 21 35 7 41 54 5 33 64 1 15 20 37 97 10 60 49 72 22 29 62 14 4 46 48 90 30 33 57 52 79 40 57 67 100 6 17 31 25 14 68 38 16 20 98 24 78 21 54 49 72 36 27 95 54 37 4 35 16 58 76 69 80 27 30 29 10 69 71 10 41 12 69 10 82 70 71 87 99 85 71 36 44 1 94 63 23 24 62 22 65 11 4 7 15 22 32 80 45 97 88 38 84 51 28 92 47 25 77 50 48 88 43 11 97 72 49 53 83 97 98 63 38 89 97 90 41 10 86 25 19 92 89 15 34 4 55 75 1 67 59 70 53 27 62 48 77 92 29 41 88 65 79 95 61 83 64 71 37 65 4 100 8 81 36 86 74 4 36 49 3 58 5 21 4 55 40 40 69 58 37 89 37 37 13 18 89 86 35 45 33 71 19 29 61 6 75 55 80 44 95 82 98 43 78 63 15 11 60 31 9 84 73 70 42 65 51 34 36 78 87 99 47 66 32 47 34 23 33 77 28 31 82 54 20 29 61 21 97 2 96 53 66 81 67 5 84 42 69 56 79 81 41 91 12 63 100 81 26 21 26 32 31 49 59 4 87 86 76 36 91 25 23 96 48 89 64 10 85 19 38 64 24 48 82 29 55 79 94 12 90 41 63 24 28 99 22 28 44 42 59 94 17 92 58 93 63 29 68 93 3 12 51 80 93 6 9 37 15 41 91 30 82 90 91 25 66 88 5 95 85 58 15 63 96 63 15 49 76 80 55 57 79 13 90 11 75 62 10 44 4 7 63 37 73 24 74 4 95 68 95 16 47 10 16 39 54 81 37 31 89 33 11 41 74 55 78 44 1 68 79 81 21 44 55 33 100 59 12 84 10 61 22 1 39 82 2 29 40 76 73 94 66 55 19 85 75 8 82 28 43 76 12 88 76 50 83 5 97 45 76 85 59 14 43 87 53 62 40 7 49 51 72 44 47 71 58 68 94 23 62 44 16 84 35 54 47 8 10 69 22 27 99 4 38 38 17 8 31 26 81 51 31 69 63 57 36 70 76 7 48 73 20 88 19 24 11 47 53 78 49 8 97 60 93 93 53 27 28 55 29 45 45 44 17 86 70 22 8 85 92 75 18 39 37 56 76 65 39 29 33 12 49 9 88 47 32 52 49 7 61 50 44 94 76 61 25 83 56 64 51 23 1 94 56 5 88 41 6 21 74 31 63 31 79 56 54 11 47 7 59 65 81 47 76 57 65 40 35 17 75 55 36 11 12 39 19 52 15 67 23 43 53 66 54 60 63 20 96 25 87 15 19 72 20 91 41 54 59 93 30 52 18 56 19 34 94 21 66 12 39 96 77 99 9 74 45 56 46 26 19 31 41 82 37 31 84 14 100 31 21 31 36 20 100 67 85 23 6 77 57 78 97 8 28 21 38 99 88 74 96 51 32 86 70 79 3 55 15 22 33 18 71 55 41 1 30 31 30 71 17 3 30 90 8 58 23 38 38 75 23 10 94 6 52 38 55 34 84 78 25 13 48 100 23 100 95 42 68 70 84 61 100 34 28 67 73 95 13 48 76 81 14 77 83 45 62 53 11 36 89 86 73 64 19 48 48 23 79 50 89 8 66 32 99 70 43 40 44 100 26 87 89 38 68 23 100 3 99 26 65 43 29 11 26 75 53 43 17 66 7 79 46 30 4 89 8 80 1 37 62 32 57 16 81 89 61 7 77 70 27 81 42 49 12 34 52 49 19 43 88 11 16 100 89 53 11 5 99 96 12 38 15 76 86 35 4 10 85 43 66 90 71 38 57 12 10 83 48 19 98 24 24 84 61 15 84 44 7 82 86 16 14 1 11 72 30 63 52 44 72 94 48 46 76 83 56 19 23 7 51 56 82 6 49 97 20 53 34 39 45 100 72 56 66 72 72 33 98 80 58 34 91 8 49 10 36 35 1 30 35 21 89 2 52 63 32 48 29 27 76 22 8 43 47 100 26 43 75 82 50 82 37 77 97 95 9 25 25 99 45 70 20 52 95 65 97 72 100 33 2 72 25 29 33 78 63 61 25 35 19 24 24 29 1 72<br>2000 499<br>19 48 17 65 93 15 61 60 13 3 79 80 51 83 39 26 5 5 77 44 66 98 16 94 16 69 67 72 46 92 98 62 49 88 48 51 37 34 40 50 79 95 81 44 68 70 84 46 46 31 8 75 5 8 19 83 49 54 54 42 11 91 94 80 74 87 30 36 74 64 9 8 52 19 50 47 58 10 63 69 77 44 15 81 24 3 15 62 65 86 40 56 45 7 95 57 55 11 86 76 15 62 16 77 74 23 71 89 95 71 12 72 8 40 48 77 1 91 46 75 98 99 14 32 11 27 71 19 14 43 36 89 47 10 47 86 82 63 49 36 97 13 19 58 46 4 45 4 51 98 80 65 78 51 54 32 72 61 78 67 4 82 64 77 25 100 85 83 97 20 69 92 73 36 95 37 6 86 28 49 61 27 45 25 72 79 28 67 46 72 92 16 35 25 62 20 30 92 9 77 70 42 56 69 70 8 50 68 57 36 61 34 11 86 88 94 29 6 53 3 9 13 56 26 38 62 74 14 37 85 43 75 95 31 28 53 24 31 23 54 68 90 19 16 28 50 84 75 86 38 53 19 47 94 86 43 54 9 16 97 95 36 54 24 94 3 92 9 25 4 60 84 52 79 36 94 38 65 92 54 25 75 39 30 88 85 93 47 90 76 34 47 44 31 45 17 37 63 6 23 65 64 19 65 94 15 66 51 33 38 46 85 100 61 19 69 73 3 51 56 99 39 67 76 84 84 86 79 76 61 12 21 14 71 37 78 34 63 37 2 3 9 50 51 37 26 52 7 36 72 76 7 48 48 98 67 73 65 46 91 5 88 90 75 12 60 45 100 31 55 93 39 37 35 32 4 99 28 1 96 38 29 59 44 75 35 14 49 64 4 14 19 21 85 91 65 54 27 3 43 10 37 55 79 40 47 16 6 38 32 24 100 21 8 29 52 58 11 57 92 5 26 30 45 44 1 20 59 79 58 88 1 61 54 94 53 7 24 37 93 84 69 57 29 47 19 34 76 59 56 85 14 89 80 50 48 26 88 50 2 15 16 37 69 47 67 92 47 50 94 87 92 29 88 9 48 100 45 40 16 4 42 14 27 70 85 77 73 58 75 24 58 55 10 56 59 62 5 15 35 66 76 30 40 55 28 69 64 8 62 94 39 88 28 36 35 76 98 63 81 93 78 31 20 19 4 80 28 21 32 74 26 14 23 57 86 17 2 39 74 45 2 48 33 37 63 58 47 62 73 97 56 13 66 38 65 65 65 96 27 3 78 16 48 9 30 82 46 64 22 23 29 34 24 32 61 10 40 71 96 50 34 49 62 28 5 87 97 12 46 16 55 42 4 98 51 19 56 62 22 65 33 20 24 32 31 12 51 80 41 98 2 15 39 74 74 4 74 18 21 43 43 2 90 62 50 59 13 63 49 94 45 31 58 8 40 65 18 58 47 79 86 64 34 6 36 66 28 68 84 74 6 25 24 98 99 95 9 80 89 1 76 100 29 8 41 74 10 57 6 45 79 27 10 78 92 64 3 65 74 32 67 75 93 34 27 34 40 90 49 17 3 30 80 34 48 85 31 26 35 16 69 27 21 27 22 3 47 75 52 77 27 41 60 17 39 71 82 95 74 34 55 71 87 17 24 39 77 11 75 70 2 84 71 39 20 48 100 90 46 62 39 62 37 19 94 37 99 75 13 6 90 56 21 6 44 73 42 14 42 2 9 15 1 80 42 7 26 82 70 49 33 33 59 24 47 65 89 58 83 51 34 53 11 18 88 38 33 28 90 69 97 62 90 66 1 61 53 36 9 45 15 55 73 9 23 64 19 57 29 25 86 85 28 2 76 46 76 98 78 77 11 92 65 83 50 70 83 68 34 59 41 64 60 9 67 2 47 18 33 99 65 7 56 22 75 92 59 46 9 54 71 4 6 80 15 26 2 76 43 14 4 14 47 79 69 91 49 85 31 48 66 37 34 66 82 74 52 78 40 65 24 84 61 88 91 24 24 69 41 77 62 59 34 62 79 94 93 19 14 84 67 31 1 59 51 41 46 99 38 75 45 14 16 27 8 14 97 75 56 86 78 45 1 12 45 96 96 55 66 52 81 5 67 2 15 23 45 16 38 15 13 49 53 40 61 80 32 53 90 84 21 52 85 31 21 35 52 92 18 4 89 90 41 76 12 98 52 77 44 39 67 50 58 51 90 62 28 96 19 45 46 87 87 52 47 21 50 69 35 43 7 28 70 29 87 66 10 15 31 37 67 93 2 15 9 4 41 62 57 44 63 45 72 30 6 9 71 76 63 99 49 32 1 70 31 21 78 30 29 84 86 82 80 96 17 42 25 37 30 58 94 64 76 72 55 38 36 36 30 69 36 67 28 43 65 37 54 39 48 70 29 1 3 34 15 91 52 98 58 27 80 98 73 43 100 25 96 41 42 23 82 98 4 83 63 87 75 67 67 46 96 17 29 46 22 62 57 18 1 81 86 80 92 30 92 38 12 38 36 88 10 41 47 28 70 66 51 80 38 11 60 65 2 12 37 94 99 71 3 78 61 38 57 50 72 29 13 72 90 56 24 11 32 15 51 4 96 68 29 6 97 83 58 29 30 34 51 42 60 94 18 76 44 81 90 61 58 53 47 94 53 16 1 52 2 28 83 68 37 65 48 20 100 81 6 7 96 52 62 4 69 43 71 51 75 100 75 75 82 91 80 95 61 8 29 9 98 70 16 80 62 56 83 2 24 77 48 38 13 9 45 87 73 45 46 7 44 50 6 49 88 60 3 21 94 81 9 81 5 51 59 72 30 84 56 67 10 32 89 88 22 40 2 95 55 17 57 69 48 29 51 5 11 64 77 86 28 42 89 61 44 14 13 22 33 38 77 71 72 93 48 88 8 61 88 69 95 1 79 79 99 24 14 67 86 21 15 70 51 39 6 45 68 80 92 53 3 39 40 6 35 25 66 5 45 14 8 5 15 92 56 3 35 14 52 34 79 90 36 9 87 5 4 70 26 93 91 46 6 81 49 35 91 33 89 87 75 35 63 85 34 83 65 92 89 19 47 27 90 64 51 28 67 80 17 1 22 9 82 55 42 51 35 75 69 69 78 52 60 62 41 67 11 25 18 21 6 30 43 50 76 42 52 46 88 14 70 88 34 38 5 4 100 55 40 67 32 96 79 85 16 59 19 34 81 2 13 99 7 93 7 85 1 65 34 98 49 45 44 17 2 43 18 21 5 53 43 74 57 65 16 9 13 50 97 64 35 90 57 14 45 69 90 35 59 65 79 83 67 86 43 98 52 13 68 76 94 49 77 34 77 89 43 16 15 98 90 50 17 60 28 38 45 48 60 22 19 86 17 76 67 63 67 70 47 41 48 82 11 12 5 41 5 89 8 63 78 41 94 54 8 6 49 91 52 3 61 45 60 64 83 51 21 38 10 27 64 2 55 27 85 77 41 89 1 34 27 51 95 69 55 36 98 99 48 96 1 8 63 39 91 78 25 36 90 65 57 38 84 79 24 59 41 76 64 37 40 91 44 100 24 34 78 16 91 3 74 14 79 27 68 57 40 84 81 67 23 61 57 90 46 80 14 19 39 44 97 38 78 95 8 21 40 70 29 2 18 95 29 99 70 31 26 41 49 48 67 29 75 40 40 40 38 23 19 52 18 69 92 1 69 70 67 19 69 32 46 70 5 71 35 26 4 30 30 94 23 98 12 40 24 85 54 70 7 63 79 91 70 51 42 42 16 96 97 93 27 98 56 22 84 69 46 20 39 60 78 93 49 1 65 39 37 50 39 54 74 16 95 44 40 36 62 69 88 35 23 32 14 67 44 40 54 64 64 66 35 90 22 41 4 94 41 100 96 99 20 86 43 64 69 73 57 7 70 68 9 39 41 64 56 85 51 70 91 59 58 85 37 55 55 65 30 65 83 9 18 64 31 52 60 62 15 4 75 74 23 35 98 4 93 39 96 19 34 53 14 39 41 7 16 49 78 15 90 62 100 89 85 10 44 52 42 61 65 58 94 21 1 22 91 96 50 93 51 40 33 13 4 92 37 49 24 45 37 63 7 18 98 3 22 55 43 62 9 51 96 4 50 68 83 42 64 19 48 11 100 94 80 55 36 19 23 71 62 15 91 65 20 58 30 68 55 35 76 57 24 31 100 34 86 35 55 15 37 43 6 27 36 46 66 21 43 10 80 45 72 92 7 75 19 18 97 11 75 75 56 5 62 32 30 69 39 15 72 69 82 61 3 11 40 92 45 85 76 35 1 71 51 8 58 97 68 35 4 42 83 7 8 48 18 41 71 95 82 2 24 48 43 63 76 2 69 70 14 18 28 11 72 3 31 85 83 100 92 19 7 49 39 77 88 18 85 8 89 10 57 31 69 5 14 70 69 38 2 40 82 77 1 27 67 18 29 12 52 44 95 55 72 56 92 65 5 97 94 72 28 73 60 9 92 54 22 6 98 17 37 79 95 82 93 87 33 47 55 8 71 17 90</code>",
			'attempts' : 3,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "856c8111bfdfa7f9f802b27a92d53f8d6c75345696958cc1270a5cdd84fa1e86"

		},

		8 : {

			'questionStatement': "You are given an array with <b>n</b> elements. Arrange the array in the following way:<br><br><code>smallest, largest, 2nd smallest, 2nd largest, 3rd smallest, 3rd largest, ......</code><br><br><h4>Sample Input</h4><code>1 2 7 8 6 3 2 5 7 8</code><h4>Sample Output</h4><code>1 8 2 8 2 7 3 7 5 6</code><h4>Test Case</h4><code>9818 993 3036 6945 7537 5203 1985 5549 2793 107 8956 90 7604 9888 349 4399 2449 8502 3273 3540 3303 8493 1174 8303 3920 7375 886 4810 1299 8819 69 6885 1685 2855 6954 9938 7763 4591 4910 4252 2701 2907 1575 417 6071 8557 115 1812 6469 7283 3321 7357 3949 155 8503 766 5178 9518 760 601 2015 1669 4134 5966 6071 240 1892 9169 2264 5716 8267 4198 2677 1467 6747 4931 1771 4371 2792 2550 4920 8140 5083 1508 7744 2610 7269 7684 6798 9948 7392 5559 1593 1424 4965 8177 9822 3985 5292 4596 4591 2608 1063 9360 1909 8602 5144 5240 9718 575 8630 5117 6977 3572 9263 2141 1065 5586 48 5960 4754 4613 7655 6450 9608 7158 5422 5437 7525 4068 8236 3344 7276 8188 5255 2591 4902 9698 9928 8831 5675 8614 3537 1677 7141 3765 2826 2427 1236 8659 3855 5933 2801 3140 6517 9083 1019 5723 5834 595 5253 6050 1235 1448 8238 2776 765 5218 1618 7600 6591 8411 6962 2159 3126 3749 4856 1093 9810 6532 5237 7862 7779 292 4556 9257 3881 328 8945 2859 2740 3403 7773 7766 6862 6229 5266 2500 8978 7884 7474 442 8786 5661 9929 9822 5561 5598 289 3582 8198 3307 640 2651 2118 7261 8951 3159 2603 8915 3874 2564 4403 9501 1888 471 1821 7699 9959 8232 4621 9885 5825 9306 7000 8155 1830 3378 9531 6945 9086 2277 4368 8508 3662 1386 4846 7094 520 8252 9926 5191 5316 3803 3331 6883 6483 874 823 9516 3731 1688 857 2951 8338 6883 5118 2851 1702 5584 8727 8702 4406 3231 3699 5624 1754 6805 4879 4923 4686 3518 5578 197 3609 9634 5450 5475 4701 7566 8588 1685 2267 8370 8485 3721 4345 9038 1662 9478 7237 7117 9033 1471 1835 5013 367 5443 1400 5469 9678 4465 1059 6769 9953 2213 4407 9503 3525 7551 1948 6585 1863 6912 2191 4103 9503 6581 8531 4676 9499 7548 8051 4977 2417 9427 3603 3788 6079 5913 6486 2964 8638 4434 4215 1136 5349 4112 905 5388 6285 9420 4312 5 719 9586 2603 8615 2538 849 2879 7776 8519 7779 7072 7912 4219 773 748 6639 1185 2412 2331 2020 277 8389 7526 1334 8459 8557 4639 1929</code>",
			'attempts' : 3,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "0fab1cc8fc20cc681c465a2e21edb9b7c1abbc5f5f655dc8f24dd0a47088d880"

		},

		9 : {

			'questionStatement' : "A subsequence of a word is obtained by dropping some letters from it. The letters that are dropped need not be consecutive. For instance, ba, bna and banaa are all subsequences of the word banana. We are interested in counting the number of distinct subsequences of a fixed length of a given word. For example, the word banana has 11 different subsequences of length 3: {aaa, aan, ana, ann, baa, ban, bna, bnn, naa, nan, nna}.<br><h4>Input Format</h4>First line contains the word of which a subsequence is to be obtained. <br>Second line contains the fixed length of the subsequence <br><h4>Output Format</h4>A single number indicating the possible subsequences<br><h4>Sample Input</h4><code>banana<br>3</code><h4>Sample Output</h4><code>11</code><h4>Test Case:</h4><code>hyxvexkjzjphurlqteswqvqqbrgrivweasjmprdgbtjapfjycwfuqvinqagclttobovxxgzqusrfmfssharkatjlvjbgyxieoqimhnimlxfpdexuetkkukvetjkqdhjgtoixjonnjyjzggjffzzicuovjiywbchcnpcjxjhghjvhqdijgsikotswdknszdcxtkuvzrhqbrdbpfashroezgnoqbtjvzbxkwuhdxqkwvcdybuhrchpctbmdkbcgfahfgzlrpvtdcakxtmvlwumcbdjxuvyhohtrsfxbchdgznt<br>4</code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "0ada723ed18ef712e6d733fac47d5604e94212028b42880512ff565038bbbb74"

		},

		10 : {

			'questionStatement' : "In mathematics, the <i>look-and-say sequence</i> is the sequence of integers beginning as follows:<br><br><center><code>1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...</code></center><br>'1' is the first element of the series.<br>To generate a member of the sequence from the previous member, read off the digits of the previous member, counting the number of digits in groups of the same digit. For example:<br><ul><li>1 is read off as 'one 1' or 11.</li><li>11 is read off as 'two 1s' or 21.</li><li>21 is read off as 'one 2, then one 1' or 1211.</li><li>1211 is read off as 'one 1, one 2, then two 1s' or 111221.</li><li>111221 is read off as 'three 1s, two 2s, then one 1' or 312211.</li></ul>Find the 15th element of this series.",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "d347fd8668cb57047865775dd117c6b80a949da40c2497bc6008e1f658694413"

		},

		11 : {

			'questionStatement' : "<div>Its Pranav's birthday. He has made <b>m</b> birthday cakes of different sizes. He wants to cut the cakes and share the slices with his friends. He can make a total of <b>n</b> straight cuts among all the cakes. Each cake <i>c</i> is only large enough to make <b>k<sub>c</sub></b> cuts on. Help Pranav calculate the maximum number of slices of cake he can get. If a cake is not cut, it is considered as a single slice.<h4>Input Format</h4>The first line contains two space separated integers denoting <b>m</b> and <b>n</b> respectively.<br />The next line contains <b>m</b> space separated integers denoting the values of <b>k<sub>c</sub></b><h4>Output Format</h4>Output a single integer - the maximum number of slices Pranav can get.<h4>Sample Input</h4><code>5 10<br />1 2 3 4 5</code><h4>Sample Output</h4><code>31</code><h4>Explanation</h4>One optimal way of cutting the cakes would be to make 0, 1, 0, 4 and 5 cuts respectively.<h4>Test Case</h4><code>12 150<br />23 1 4 24 2 4 23 44 3 22 98 12</code></div>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "6114506a772204f755e6216ee3b0b3fd5603f72fac7dc2c125bfd387d326fcef"

		},

		12 : {

			'questionStatement': "You have a new professor of graph theory and he speaks very quickly. You come up with the following plan to keep up with his lecture and make notes.<br>You know two languages, and the professor is giving the lecture in the first one. The words in both languages consist of lowercase English characters, each language consists of several words. For each language, all words are distinct, i.e. they are spelled differently. Moreover, the words of these languages have a one-to-one correspondence, that is, for each word in each language, there exists exactly one word in the other language having has the same meaning.<br>You can write down every word the professor says in either the first language or the second language. Of course, during the lecture you write down each word in the language in which the word is shorter. In case of equal lengths of the corresponding words you prefer the word of the first language.<br>You are given the text of the lecture the professor is going to read. Find out how the lecture will be recorded in your notes.<br><h4>Input</h4>The first line contains two integers, <b>n</b> and <b>m</b> - the number of words in the professor's lecture and the number of words in each of these languages.<br>The following <b>m</b> lines contain the words. The <b>i-th</b> line contains two strings <b>ai, bi</b> meaning that the word ai belongs to the first language, the word bi belongs to the second language, and these two words have the same meaning. It is guaranteed that no word occurs in both languages, and each word occurs in its language exactly once.<br>The next line contains <b>n</b> space-separated strings <b>c1,c2,...,cn</b> - the text of the lecture. It is guaranteed that each of the strings <b>ci</b> belongs to the set of strings <b>{a1,a2,...am}</b>.<br>All the strings in the input are non-empty, each consisting of no more than 10 lowercase English letters.<br><h4>Output</h4>Output exactly n words: how you will record the lecture in your notebook. Output the words of the lecture in the same order as in the input.<br><h4>Sample Input</h4><code>5 3<br>joll wuqrd<br>euzf un<br>hbnyiyc rsoqqveh<br>hbnyiyc joll joll euzf joll<br></code><h4>Sample Output</h4><code>hbnyiyc joll joll un joll</code><br><h4>Test Input</h4><code>120 100<br>faxaoh zvoijm<br>aqawoxf hsxrgq<br>pumvjcb qoqbstmub<br>xeyfozcii jqhgaf<br>tyliqbgona flqinpk<br>mdlukqw qegvjkseep<br>bxumydq ugvkqxdfa<br>xqbcpp qqtdynkkhu<br>fojxbi sodztj<br>sbcprrbga nwkjqqsgsa<br>uowllywbjj zoehhqj<br>qzmubsdk mdpigvlrst<br>ecqbdnwd acsyckxr<br>zibfhfvtm fqyukbfuuj<br>xbaaaer stzgrxk<br>qrtppnba swsbtam<br>nkmjlkwxs artdmccplt<br>jovmmb lxlqbidwfo<br>iclygs piwlbnlma<br>yqudwzxte ocmyttc<br>instpzymel lvevzwb<br>gqrcyefbs oohxctonwr<br>cjaogwu bhstmmlfrj<br>oqemvxnhj kyuvnc<br>sbuwfpzkzz ntggfgy<br>rpqkmacv wgsmdhq<br>dzxyzcebc hohfcemmlu<br>jrsglkemq izxbfisboo<br>ohpttnry jytdpyf<br>zpswaha obasygcd<br>pitkhc hcntdiqpnu<br>stxhdvu ogczkxki<br>ivsyup smjgaruo<br>nclxefbbn kqspkecjjp<br>sczimf ntnzdv<br>xvmutmthy zkofbbg<br>zaewpcie yazhrpqaxi<br>necovh tytmhg<br>rszqwglg hgkrus<br>xwjqjipezk ckwyubs<br>oecqdkqd rfxoex<br>ejfbovrjh odvcbj<br>lysqyppjgc ibsuzzb<br>jctdyn rrwupj<br>ctkysrp kztvdyuku<br>ymdrkmumbk zgygoqfo<br>kzlxatm fuaale<br>qmicuhdxe aobkxxnnh<br>boothjbtd pvjqtrl<br>macjgdmc cuwpif<br>urdglaefei wgsncadw<br>quoyucose frbiyt<br>byhnihjo tdfwkrvtg<br>rwetthtxy gcaccapmy<br>vvfgwdm rsiselnb<br>oblercrmc mfundnn<br>dxvtrcm jmhufvue<br>ytkhxufccf raxbxairng<br>ahsbgbbtcr yghhwkh<br>rszgpga qxxrklayp<br>oabaayggj ivujaf<br>grokuliopx fxpjdlp<br>phmeewpay cwpajcdzt<br>xtrmfteid gjlzciv<br>xtzyiygqrd lxvutyfr<br>eaqyez ykhavpsj<br>pkflcm uetisuiug<br>dpqekdbi kfhisoew<br>cqgeuhr rkngvceht<br>stibpfyi dnvhmdtv<br>qbvvcxey xtedrqiucd<br>effboiwrfv lrtlomj<br>sonyonsly waiwwxt<br>qatyvnc zyjiuengcg<br>wlxuhwd zgavppti<br>btbdjkjkn pcnole<br>hiqqnqe tbyimbj<br>xjekquwtp anzwrwmk<br>kkuyholn zfqlqnvsaa<br>bvhdud xwmdbo<br>wqfqji ofepfcsi<br>azhhkozbd txiosl<br>ntbdxlr detrzesy<br>wmziai zpmxibpik<br>dzrjkqdsu mziqlbuery<br>fmxaukopb vwjsuimidz<br>ldukxpa izmnta<br>winzeu gpmehqazey<br>dheucy jqghqzs<br>rkejfbhyy yenazsaaj<br>cbriyxs fjnexpbu<br>onzkgqr etwyow<br>ucjskwl nbbwysqqtz<br>wamuokb aqhsznaos<br>rmvzshkeqa efdqyrqyk<br>nvcmrtk gqpgzvah<br>mhxqosjb nupagm<br>jybjniupy wncdmfcxs<br>dxhrgh czyoytgmd<br>tukwegmcsi uveouxp<br>phmeewpay kzlxatm fmxaukopb ytkhxufccf gqrcyefbs cjaogwu fojxbi pitkhc bvhdud jrsglkemq quoyucose boothjbtd aqawoxf rwetthtxy ymdrkmumbk xqbcpp sbuwfpzkzz jovmmb cjaogwu fmxaukopb cjaogwu pumvjcb ohpttnry instpzymel urdglaefei byhnihjo gqrcyefbs xvmutmthy kkuyholn fojxbi sonyonsly rpqkmacv cbriyxs azhhkozbd wqfqji wqfqji ivsyup qrtppnba ucjskwl dpqekdbi grokuliopx cbriyxs bxumydq pitkhc zaewpcie cjaogwu nvcmrtk bvhdud xtrmfteid pumvjcb qbvvcxey instpzymel vvfgwdm ahsbgbbtcr rszgpga qmicuhdxe dzrjkqdsu ntbdxlr eaqyez vvfgwdm quoyucose dheucy xqbcpp wmziai quoyucose rpqkmacv quoyucose oabaayggj vvfgwdm grokuliopx azhhkozbd nclxefbbn rpqkmacv rwetthtxy xqbcpp qatyvnc ahsbgbbtcr iclygs qbvvcxey xtzyiygqrd yqudwzxte xtzyiygqrd xwjqjipezk effboiwrfv xtzyiygqrd cqgeuhr wlxuhwd nclxefbbn ohpttnry zibfhfvtm instpzymel bvhdud effboiwrfv wmziai qrtppnba nvcmrtk urdglaefei eaqyez vvfgwdm winzeu aqawoxf ucjskwl ymdrkmumbk hiqqnqe uowllywbjj wlxuhwd bvhdud zpswaha macjgdmc boothjbtd xvmutmthy jrsglkemq onzkgqr fmxaukopb onzkgqr jovmmb instpzymel xeyfozcii ytkhxufccf xqbcpp</code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "ad0315a8eae0b7153c2a91d9be97736cfba72622987f80371bedec4ce160bb19"

		},

		13 : {

			'questionStatement': "It is lunch time for Mole. His friend, Marmot, prepared him a nice game for lunch.<br>Marmot brought Mole <b>n</b> ordered piles of worms such that i<sup>th</sup> pile contains a[i] worms. He labeled all these worms with consecutive integers: worms in first pile are labeled with numbers 1 to a[1], worms in second pile are labeled with numbers a[1] + 1 to a[1] + a[2] and so on. See the example for a better understanding.<br>Mole can't eat all the worms (Marmot brought a lot) and, as we all know, Mole is blind, so Marmot tells him the labels of the best juicy worms. Marmot will only give Mole a worm if Mole says correctly in which pile this worm is contained.<br>Poor Mole asks for your help. For all juicy worms said by Marmot, tell Mole the correct answers.<br><h4>Input</h4>The first line contains a single integer <b>n</b>, the number of piles.<br>The second line contains <b>n</b> integers a[1], a[2], ..., a[n], where a[i] is the number of worms in the i<sup>th</sup> pile.<br>The third line contains single integer <b>m</b>, the number of juicy worms said by Marmot.<br>The fourth line contains <b>m</b> integers q[1], q[2], ..., q[m], the labels of the juicy worms.<br><h4>Output</h4>Print <b>m</b> space separated integers to the standard output. The i<sup>th</sup> integer represents the number of the pile where the worm labeled with the number q[i] is.<br><h4>Sample Input</h4><code>5<br>2 7 3 4 9<br>3<br>1 25 11</code><br><h4>Sample Output</h4><code>1 5 3</code><br><h4>Test case</h4><code>15<br>10 13 20 33 47 69 72 41 38 2 7 102 97 65 41<br>8<br>22 78 101 78 33 208 44 39<br></code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "3cf49d33608edba480c91f4247780c2ccefedc41b16c39d5a317a6e2c2843985",

		},

		14 : {

			'questionStatement': "You are given <b>n</b> <b>k</b>-digit integers. You have to rearrange the digits in the integers so that the difference between the largest and the smallest number was minimum. Digits should be rearranged by the same rule in all integers.<br><h4>Input Format</h4>The first line contains integers <b>n</b> and <b>k</b> - the number and digit capacity of numbers correspondingly. <br>Next <b>n</b> lines contain <b>k</b>-digit positive integers. Leading zeroes are allowed both in the initial integers and the integers resulting from the rearranging of digits.<h4>Output Format</h4>Print a single number: the minimally possible difference between the largest and the smallest number after the digits are rearranged in all integers by the same rule.<h4>Sample Input</h4><code>3 3<br>010<br>909<br>012</code><h4>Sample Output</h4><code>3</code><h4>Explanation</h4>In the sample, if we swap the second digits and the first ones, we get integers 100, 99 and 102. So, 102 - 99 = 3.<h4>Test Case</h4><code>14 8<br>83239439<br>62184887<br>58968944<br>39808261<br>68740623<br>38480328<br>81965504<br>52600488<br>98729379<br>10299013<br>67423901<br>57819821<br>45677132<br>23789121<br></code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 40,
			'answer' : "fc9ec5de6611ac87b104ab48a9c09ae21ad78474f9fe64150ac557051ff4ee21"

		},
		
		15 : {

			'questionStatement' : "Nikita was thinking about telephone poles and came up with an idea for a fun programming challenge. There are <b>n</b> telephone poles ascending a mountain and each pole has a weight and a unique altitude. Our program must move the poles into <b>k</b> number of stacks, but we can only rearrange the poles according to certain criteria:<ul><li>Poles can only be moved from higher altitudes to lower altitudes.</li><li>Stacks can only be formed at the initial pole altitudes.</li><li>A stack must consist of at least one pole.</li></ul>The image below shows how poles can be moved into 2 stacks at altitudes 35 and 5.<br><center><img src='../img/img2.png'></center><br>Moving the poles down the mountain also costs money. Moving a pole with weight <b>w<sub>i</sub></b> and altitude <b>x<sub>i</sub></b> to an altitude of <b>x<sub>j</sub></b> (where <b>x<sub>i</sub></b> > <b>x<sub>j</sub></b>) costs <b>w<sub>i</sub> * (x<sub>i</sub> - x<sub>j</sub>)</b>.Write a program to determine the least amount of money needed to rearrange the poles into <b>k</b> stacks.<h4>Input Format</h4>The first line contains two soace separated integers <b>n</b> and <b>k</b>.<br>Each of the next <b>n</b> lines contains two integers <b>x<sub>i</sub></b> and <b>w<sub>i</sub></b> denoting the altitude and weight of a particular pole.<br>The poles will be listed from lowest to highest altitude.<h4>Output Format</h4>Print the minimum cost for rearranging the poles into <b>k</b> stacks.<h4>Sample Input 1</h4><code>3 1<br>20 1<br>30 1<br>40 1<br></code><h4>Sample Output 1</h4><code>30</code><h4>Explanation</h4>We move the highest and the middle pole towards the lowest pole which costs: <br>1 * (40 - 20) + 1 * (30 - 20) = 30<h4>Sample Input 2</h4><code>6 2<br>10 15<br>12 17<br>16 18<br>18 13<br>30 10<br>32 1<br></code><h4>Sample Output 2</h4><code>216</code><h4>Explanation</h4>The optimal rearrangement would be to have a stack at altitude 16 and another at altitude 10.<br><h4>Test case</h4><code>24 17<br>28 974<br>37 971<br>78 916<br>91 781<br>167 744<br>194 732<br>210 710<br>211 670<br>311 658<br>371 595<br>397 593<br>486 509<br>513 506<br>518 432<br>529 420<br>544 387<br>555 360<br>693 345<br>724 285<br>834 174<br>838 144<br>887 117<br>936 113<br>990 3<br></code>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "6c7198493d1c645182a5ae2f4cf89fba8331d66611aec95a0bf5d1fbf3f8427b"

		},

		16 : {

			'questionStatement': "<p>You are given the equation: <code>z = [x/2] + y + xy</code><br>where, [x] denotes the floor value of x.<br>The above equation is unsolvable for some values of z. If we arrange these values in ascending order, we get a sequence. Find the <code>n<sup>th</sup></code> value in this sequence. Since the value can be large, find the value modulo 1000000007. <br><br>Required data:<br><code>2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607, 1279, 2203, 2281, 3217, 4253, 4423, 9689, 9941, 11213, 19937, 21701, 23209, 44497, 86243, 110503, 132049, 216091, 756839, 859433, 1257787, 1398269, 2976221, 3021377, 6972593, 13466917, 20996011, 24036583, 25964951, 30402457, 32582657, 37156667 </code><h4>Sample Input</h4><code>28</code><br><h4>Sample Output</h4><code>485739298<br></code><h4>Test case</h4><code>40</code></p>",
			'attempts' : 9,
			'solved' : false,
			'attempted' : false,
			'score' : 80,
			'answer' : "a0c17a2d79b008bc3a1c2e08dc49a31b48b6a70fefe6e51ab9f520651b5dc2d2",

		},

		17 : {

			'questionStatement': "<p>Sidhant is bored in his hostel and he decides to play football in the corridor. The corridor is shaped as a rectangular parallelpiped. Formally the corridor has a door, a ceiling, a floor and two walls. Consider a 3-D space. The door of the corridor will be a rectangle on the xOz plane, such that the lower left corner of the door is located at point (0,0,0) and the upper right corner is located at the point (a,0,b). The corridor is infinite in the dirction of increasing y. The floor in the corridor will be the plane xOy. The ceiling of the corridor will be a plane parallel to the plane xOy and it passes through the point (a,0,b). One of the walls is the plane yOz and the other is a plane parallel to the plane yOz passing through the poing (a,0,b). The ball hits the door when the y coordinate of the ball becomes 0. <br>Now, Sidhant takes the ball to a distance of m away from the door, i.e, he places the ball at the point (a/2,m,0). Now he hits the ball with a velocity vector of (vx,vy,vz). The ball bounced of the walls, ceiling, floor and finally hit the door at a spot (x,0,z). Find the values of x,z. Assume that Sidhant's world follows laws of an ideal physical model, i.e, ideal laws of reflection, zero friction, zero gravity, no loss of energy and no air resistance.Print exactly 9 digits after the decimal point.<br><center><img src='../img/q15.jpg'></center> <br><br><br><h4>Sample Input</h4><code>7 2 11<br>3 -11 2<br></code><h4>Sample Output</h4><code>6.5000000000 2.0000000000<br></code><h4>Test case</h4><code>41 4 58<br>81 -9 65</code></p>",
			'attempts' : 9,
			'solved' : false,
			'attempted' : false,
			'score' : 80,
			'answer' : "eabdf290d67fcec51cfb426abbee0ce225fd1027c7e2e61edb669f467530b863",

		},

		18 : {

			'questionStatement': "<h3>Knapsack</h3>Given weights and values of <b>n</b> items, put these items in a knapsack of capacity <b>W</b> to get the maximum total value in the knapsack. In other words, given two integer arrays <b>val [0..n-1]</b> and <b>wt [0..n-1]</b> which represent values and weights associated with <b>n</b> items respectively. Also given an integer <b>W</b> which represents knapsack capacity, wrote the pseudo code to find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to <b>W</b>. You cannot break an item, either pick the complete item, or don't pick it."

		},

		19 : {

			'questionStatement' : "<h3>Printers</h3>Shounak has decided to buy a new printer, but the printer's software doesn't seem to be working, so he decides to write a program that will do this for him, his program must print itself without the use of any file handling operations. He manages to do it. Can you?"

		},

		20 : {

			'questionStatement' : "<h3>N-Queens</h3>In this questions you're expected to write an efficient algorithm to the famous N queens problem. To the uninitiated, the N Queens problem is the problem of placing N queens in an NxN chessboard such that no two queens threaten each other. A queen is said to threaten another, when the two queens are either in the same row, same column or on the same diagonal. Points will be awarded based on efficiency of the algorithm."

		},

		21 : {

			'questionStatement' : "<h3>Lots of Prime</h3> Prime numbers are a major part of modern day cryptography, thus generation of prime numbers is a very important need. This question requires you to write an algorithm to efficiently find the first <b>N</b> prime numbers, where <b>N</b> is a number less than 10<sup>6</sup>."

		},

		22 : {

			'questionStatement' : "<h3>Odd one out</h3>Given an array of numbers in which every element occurs three times, except one write an efficient algorithm to find the number that occurs only once."

		}

	};
// console.log(questions)