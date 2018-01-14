
var le = '&le;', ge = '&ge;', lt = '&#60;', gt = '&#62;';

var questions = 

	{

		/* 1 */
		//-- harsh
		1 : {

			'questionStatement': "You are given two set of points. The first set is determined by the equation A<sub>1</sub>x + B<sub>1</sub>y + C<sub>1</sub> = 0, and the second one is determined by the equation A<sub>2</sub>x + B<sub>2</sub>y + C<sub>2</sub> = 0. Write the program which finds the number of points in the intersection of two given sets.<br><h4>Input Format</h4>The first line of the input contains three integer numbers A<sub>1</sub>, B<sub>1</sub>, C<sub>1</sub> separated by space. The second line contains three integer numbers A<sub>2</sub>, B<sub>2</sub>, C<sub>2</sub> separated by space. All the numbers are between -100 and 100, inclusive.<br><h4>Output Format</h4>Print the number of points in the intersection or -1 if there are infinite number of points.<br><h4>Sample Input</h4><code>1 1 0 <br>2 2 0</code><h4>Sample Output</h4><code>-1</code><h4>Test case:</h4><code>1 1 0 <br>2 -2 0</code>",
			'attempts' : 1,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"

		},

		/* 2 */
		//-- harsh
		2 : {

			'questionStatement': "Shounak Dey is a legend. He has secured an All India Rank of 25 in JEE Mains 2010 Examination. His batchmates are looking for a treat. They always come in a group to him for demanding treat. But Shounak has a lot of expenses to cover and will be able to give treat to only few of them. To decide the group of people eligible for the treat, he uses the following criteria: People in group must belong to same hostel and everyone in group must be lower or equally (rank >=15) ranked to him.<br>Can you find out whether a group gets the treat? <br>Note: Here hostel_id identifies each hostel uniquely.<br><h4>Input format</h4>First line contains <b>N</b>, the number of people in a group. Second line contains <b>N</b> space separated integers hostel_id[1], hostel_id[2] ....hostel_id[n], where hostel_id[i] denotes the hostel id of ith person in group. Third line contains <b>N</b> space separated integers rank[1], rank[2] ..rank[n], where rank[i] denotes the rank of ith person in the group.<br><h4>Output format</h4>Print 'Party'(without quotes) if the group gets the treat else print 'No Party' (without quotes) on a separate line.<br><h4>Sample Input</h4><code>5 <br>1 1 1 1 6 <br>12 10 5 20 25 <br></code><h4>Sample Output</h4><code>No Party</code><h4>Test Case</h4><code>10 <br>2 2 2 2 2 2 2 2 2 2 <br>101 233 4775 76 33 24 7790 990 2002 26</code>",
			'attempts' : 1,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "157e121903e548067d08b9606cf1f431a97416a3184ea21f49f7c281ba95f432"

		},


		/* 3 */
		//-- sayan
		3 : {

			'questionStatement': "Given a number <b>N</b>, the task is to count all the digits in <b>N</b> which divide <b>N</b>. Divisibility by 0 is not allowed. If any digit in <b>N</b> which is repeated and divides <b>N</b>, then all repetitions of that digit should be counted<h4>Input Format</h4>The first line of each test case contains the integer <b>N</b><h4>Output Format</h4>Print the count of all digits of <b>N</b> in a new line.<h4>Sample Input</h4><code>35</code><h4>Sample Output</h4><code>1</code><h4>Explaination</h4>3 doesnt divide 35 but 5 does<h4>Test Case</h4><code>123456789012354673</code>",
			'attempts' : 3,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"

		},

		/* 4 */
		//-- tharoor
		4 : {

			'questionStatement' : "<div>A chocolate factory produces bars of chocolate, the faces of which are plain and have dimension <b>m</b>&nbsp;x&nbsp;<b>n</b>. They wish to make divisions on this face so that it becomes easier to break the bar into pieces. They also want each piece to be a square and all pieces be equal in size. Given the values of <b>m</b> and <b>n</b> help them calculate the minimum number of pieces a single bar can be divided into.<h4>Input Format</h4>The first and only line contains two space separated integers <b>m</b> and <b>n</b>.<h4>Output Format</h4>Output a single number denoting the number of pieces.<h4>Sample Input</h4><code>10 15</code><h4>Sample Output</h4><code>6</code><h4>Explanation</h4>The bar can be divided into 6 square pieces of dimension 5&nbsp;x&nbsp;5.<h4>Test Case</h4><code>61724 33236</code></div>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "1da51b8d8ff98f6a48f80ae79fe3ca6c26e1abb7b7d125259255d6d2b875ea08"

		},

		/* 5 */
		//-- sayan
		5 : {

			'questionStatement': "<p>We know that prime numbers are positive integers that have exactly two distinct positive divisors.Similarly, we'll call a positive integer <b>t</b> a T-prime number, if <b>t</b> has exactly three distinct positive divisors. For a given number <b>n</b> which is a T-prime, find and print its factors.</p><h4>Input Format</h4>One line consisting of an integer <b>n</b><h4>Output Format</h4>Print the divisors of the given T-prime number separated by spaces.<h4>Sample Input</h4><code>4</code><h4>Sample Output</h4><code>1 2 4</code><h4>Explanation</h4>4 has three divisors 1,2 and 4 </p><h4>Test Case</h4><code>306660105361</code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "6b879b57d21a10081c154e0810acd62ccd774ab020d8ace96ba29c5aef7cc3cf"

		},

		/* 6 */
		//-- harsh
		6 : {

			'questionStatement' : "A subsequence of a word is obtained by dropping some letters from it. The letters that are dropped need not be consecutive. For instance, ba, bna and banaa are all subsequences of the word banana. We are interested in counting the number of distinct subsequences of a fixed length of a given word. For example, the word banana has 11 different subsequences of length 3:{aaa, aan, ana, ann, baa, ban, bna, bnn, naa, nan, nna}.<br><h4>Input Format</h4>First line contains the word of which a subsequence is to be obtained. <br>Second line contains the fixed length of the subsequence <br><h4>Output Format</h4>A single number indicating the possible subsequences<br><h4>Sample Input</h4><code>Banana<br>3</code><h4>Sample Output</h4><code>11</code><h4>Test Case:</h4><code>Tinnitus <br>3</code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "9f14025af0065b30e47e23ebb3b491d39ae8ed17d33739e5ff3827ffb3634953"

		},

		/* 7 */
		//pending Rajat
		7 : {

			'questionStatement' : "<p>Magneto is chasing Hydra scientists. The scientists are travelling by different trains. Each train is represented as an interval <b>[a<sub>i</sub>,b<sub>i</sub>]</b>. Magneto intends to destroy all the trains in which the scientists are travelling. A train is destroyed if a dynamite is placed at a point <b>p</b> within its interval. <b>(a<sub>i</sub> " + le + " p " + le + " b<sub>i</sub>)</b><br>Determine the minimum number of dynamites required to destroy all trains.<br>(The trains are running on multiple tracks.) </p><h4>Input format</h4><p>First line contains an integer <b>N</b>, denoting number of trains.<br>Next <b>N</b> lines contain two spaced integers <b>a<sub>i</sub> and b<sub>i</sub></b> denoting train coordinates.</p><h4>Input Constraints</h4><ul><li>1 " + le + " N " + le + " 100</li><li>0 " + le + " a<sub>i</sub> " + le + " b<sub>i</sub> " + le + " 500</li></ul><h4>Output format</h4><p>Output the minimum number of dynamites required. (Integer value)</p><h4>Sample Input</h4><code>4 <br>1 4 <br>2 7 <br>8 10 <br>12 15</code><h4>Sample Output </h4><code>3</code><h4>Explanation</h4></p>There are 4 trains. [1,4], [2,7], [8,10], [12,15]. At least 3 dynamites will be needed.A possible solution is to place dynamites at p=3, p=9, p=13. </p><h4>Test Case</h4><code>15 <br>43 71 <br>7 20<br>15 31<br>75 120<br>211 253<br>40 44<br>134 141<br>34 37<br>90 134<br>2 4<br>142 192<br>200 205<br>4 9<br>54 60<br>203 229</code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "cd0aa9856147b6c5b4ff2b7dfee5da20aa38253099ef1b4a64aced233c9afe29"

		},

		/* 8 */
		//-- tharoor
		8 : {

			'questionStatement' : "<div>Its Pranav's birthday. He has made <b>m</b> birthday cakes of different sizes. He wants to cut the cakes and share the slices with his friends. He can make a total of <b>n</b> straight cuts among all the cakes. Each cake <i>c</i> is only large enough to make <b>k<sub>c</sub></b> cuts on. Help Pranav calculate the maximum number of slices of cake he can get. If a cake is not cut, it is considered as a single slice.<h4>Input Format</h4>The first line contains two space separated integers denoting <b>m</b> and <b>n</b> respectively.<br />The next line contains <b>m</b> space separated integers denoting the values of <b>k<sub>c</sub></b><h4>Output Format</h4>Output a single integer - the maximum number of slices Pranav can get.<h4>Sample Input</h4><code>5 10<br />1 2 3 4 5</code><h4>Sample Output</h4><code>31</code><h4>Explanation</h4>One optimal way of cutting the cakes would be to make 0, 1, 0, 4 and 5 cuts respectively.<h4>Test Case</h4><code>12 150<br />23 1 4 24 2 4 23 44 3 22 98 12</code></div>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 20,
			'answer' : "6114506a772204f755e6216ee3b0b3fd5603f72fac7dc2c125bfd387d326fcef"

		},

		/* 9 */
		//pending Rajat
		9 : {

			'questionStatement' : "<p>To prove his intelligence, given a string <b>S</b> consisting of only <b>1s</b> and <b>0s</b>, Professor X needs to find the number of substrings which start and end both in <b>1</b>.</p><p>In this problem, a substring is defined as a sequence of continuous characters <b>S<sub>i</sub>, S<sub>i+1</sub>, ..., S<sub>j</sub></b> where <b>1</b> " + le + " <b>i</b> " + le + " <b>j</b> " + le + " <b>N</b>.</p><h4>Input:</h4><p>First line contains <b>T</b>, the number of testcases. Each test case consists of <b>N</b>(the length of string) in one line and string in second line.</p><h4>Output:</h4><p>For each test case, print the required answer in one line.</p><h4>Constraints:</h4><ul><li>1 " + le + " T " + le + " 10<sup>5</sup></li><li>1 " + le + " N " + le + " 10<sup>5</sup></li><li>Sum of <b>N</b> over all testcases " + le + " 10<sup>5</sup></li></ul><h4>Sample Input:</h4><code>2<br>4<br>1111<br>5<br>10001<br></code><h4>Sample Output:</h4><code>10<br>3<br></code><h4>Explanation:</h4>In the first test case, all substrings satisfy.<br>In the second example, three substrings S[1,1], S[5,5] and S[1,5] satisfy.</p><h4>Test Case:</h4><code>1<br>66<br>111000010001010100100001111000010101010101000110001111101010010001<br></code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "de7d1b721a1e0632b7cf04edf5032c8ecffa9f9a08492152b926f1a5a7e765d7"

		},

		/* 10 */
		//pending Sarawgi
		10 : {

			'questionStatement' : "<p>Welcome to the 24th Century! Things have changed a lot in the last thousand years. Captain Kirk and his team are still on their mission to fight Nero, from destroying the Federation. However, now, Nero is in possession of a number of planets and its inhabitants. And even more amazingly, there are many parallel universes which were captured!</p><p>There is an infinite number of parallel universes, each of which has <b>N</b> planets. The planets inside a single universe are numbered from 1 to <b>N</b>. The planets inside a single universe are connected with each other by <b>N-1</b> bi-directional tunnels in such a way that there's a path between any pair of planets within a single universe. The network of tunnels in every universe is the same. That is, if there is a tunnel between planets q<sub>1</sub> and q<sub>2</sub> in some universe, then there is a tunnel between planets q<sub>1</sub> and q<sub>2</sub> in every universe.</p><p>The universes are numbered starting from 1, while the planets in a single universe are numbered from 1 to <b>N</b>. Therefore a particular planet can be uniquely determined by its planet number inside the particular universe, and the number of the universe that it belongs to.There are also <b>M</b> special bi-directional teleports that let you travel from one planet to another, and these could even be across different universes. Each teleport is defined by 4 numbers, <b>p<sub>1</sub>, u<sub>1</sub>, p<sub>2</sub>, u<sub>2</sub></b>. This means that it can teleport you from the <b>p<sub>1</sub></b><sup>th</sup> planet in <b>u<sub>1</sub></b><sup>th</sup> universe to the <b>p<sub>2</sub></b><sup>th</sup> planet in <b>u<sub>2</sub></b><sup>th</sup> universe and also vice-versa.All tunnels and special teleports take 1 unit of time to pass through.Captain Kirk wants to find the shortest distance between two places. He has <b>Q</b> such queries that need to be answered. Try to help him with these.</p><h4>Input:</h4><p>The first line contains three integers, <b>N</b>, <b>M</b> and <b>Q</b>, which denote the number of planets in a single universe, the number of special teleports, and the number of queries, respectively.<br>The next <b>N - 1</b> lines describe the tunnels which connect planets inside a universe. Each line has two integers denoting the labels of the planets connected by the tunnel.<br>The next <b>M</b> lines describe the special teleports, with each line containing 4 integers: <b>p<sub>1</sub>, u<sub>1</sub>, p<sub>2</sub>, u<sub>2</sub></b> as described above.<br>The next <b>Q</b> lines describe the queries. Each line contains four integers <b>p<sub>1</sub>, u<sub>1</sub>, p<sub>2</sub>, u<sub>2</sub></b> and this means that you have to find the length of a shortest path between the <b>p<sub>1</sub></b><sup>th</sup> planet in <b>u<sub>1</sub></b><sup>th</sup> universe and the <b>p<sub>2</sub></b><sup>th</sup> planet in <b>u<sub>2</sub></b><sup>th</sup> universe.</p><h4>Output:</h4><p>For each query output its answer in a new line. If it's possible to reach one planet from the other, then output the shortest distance between them. Otherwise, output 'impossible'. (without quotes)</p><h4>Constraints:</h4><ul><li>1 " + le + " N " + le + " 300,000</li><li>1 " + le + " M " + le + " 100,000</li><li>1 " + le + " Q " +  le + " 10</li><li>1 " + le + " p<sub>1</sub>,p<sub>2</sub> " + le + " N</li><li>The whole graph (including both tunnels and special teleports) has no multi-edges or loops.</li></ul><h4>Sample Input:</h4><code>4 1 8<br>1 2<br>1 3<br>3 4<br>1 30 4 30<br>1 30 3 30<br>1 30 4 30<br>1 53 3 30<br>1 53 4 30<br>1 13 2 30<br>1 30 3 14<br>2 14 4 14<br>2 30 4 30<br></code><h4>Sample Output:</h4><code>1<br>1<br>impossible<br>impossible<br>impossible<br>impossible<br>3<br>2<br></code><h4>Explanation:</h4><p>Note that there can be teleports between two planets of the same universe. As example, the only teleport in this test case is between the first and fourth planets of the 30<sup>th</sup>universe.</p><h4>Test Case:</h4><code>3 3 1<br>1 2<br>2 3<br>1 1 1 2<br>3 3 3 2<br>1 2 3 3<br>3 1 1 3<br></code>",
			'attempts' : 5,
			'solved' : false,
			'attempted' : false,
			'score' : 30,
			'answer' : "189f40034be7a199f1fa9891668ee3ab6049f82d38c68be70f596eab2e1857b7"

		},

		/* 11 */
		//pending Sarawgi
		11 : {

			'questionStatement' : "<p>Optimus Prime has a problem - he likes a girl but she has <b>32</b> secrets and <b>N</b> friends (also girls).<br>Prime has enumerated each girl from <b>1</b> to <b>N</b>, Prime's crush has the number <b>1</b>.<bt>Now he consider all girls as nodes of a directed graph. If one girl has an edge directed towards another girl, the former tells all the secrets she knows to the latter. Edges are oriented, so if one girl is sharing secrets with another, it doesn't imply the same relation in the reverse direction. Also, there are no cycles in the graph.<br>Each girl (except Prime's crush) has only one edge emanating from her, or doesn't have any edges emanating from her at all. Each girl listens to at most one girl. In other words, for each girl, there is only one girl who reveals secrets to her, or there are no such girls at all. Each edge has two integers assigned to it, specifying the <i>range of interest</i>. If girl <b>A</b> knows secrets in the range <b>[10-20]</b> and an edge directed towards girl <b>B</b> with a range of interest <b>[2-15]</b> then girl <b>B</b> will know secrets in the range <b>[10-15]</b>, which is, evidently, an intersection of the range of secrets and the interest range.<br>Prime's crush has all the <b>[1-32]</b> secrets, other girls just listen to her and then gossip around (share those secrets). If a girl doesn't have an edge emanating from her, she tells all the secrets she knows to Prime.<br>Prime can perform operations of the following kind: take some edge, and extend its range of interest by one (to the left or the right). He wants to know the minimal number of operations he needs to perform in order to collect all the secrets.</p><h4>Input:</h4><p><ol><li>The first line contains two integers <b>N</b> and <b>M</b> denoting the number of girls and ribs appropriately.</li><li>Each of next <b>M</b> lines describe an edge, and contains four integers <b>i, j, l, r</b> meaning that there is an oriented edge from <b>i</b> to <b>j</b> with a range of interest <b>[l-r]</b>.</li></ol></p><h4>Output:</h4><p>In a single line, output a single integer: the answer.</p><h4>Constraints:</h4><ul><li>1 " + le + " N, M " + le + " 10<sup>5</sup></li><li>1 " + le + " i < j " + le + " N</li><li>1 " + le + " l " + le + " r " + le + " 32</li></ul><h4>Sample Input:</h4><code>5 4<br>1 2 10 15<br>1 3 10 16<br>2 4 1 1<br>3 5 10 15<br></code><h4>Sample Output:</h4><code>50</code><h4>Explanation:</h4><p>Without any changes made by Prime, we will have the following knowledge propagation:Girl <b>1</b> knows <b>[1-32]</b>.<br>Girl <b>2</b> knows <b>[10-15]</b> (intersection of <b>[1-32]</b> and <b>[10-15]</b>).<br>Girl <b>3</b> knows <b>[10-16]</b> (intersection of <b>[1-32]</b> and <b>[10-16]</b>).<br>Girl <b>4</b> knows <b>[]</b> (intersection of <b>[10-15]</b> and <b>[1-1]</b>).<br>Girl <b>5</b> knows <b>[10-15]</b> (intersection of <b>[10-16]</b> and <b>[10-15]</b>).<br>So Prime can collect secrets <b>[10-15]</b> only.<br>Here is the solution:<br>1. Change <b>1 2 10 15</b> to <b>1 2 1 15</b> (by applying the operation <b>9</b> times).<br>2. Change <b>2 4 1 1</b> to <b>2 4 1 9</b> (by applying the operation <b>8</b> times).<br>3. Change <b>1 3 10 16</b> to <b>1 3 10 32</b> (by applying the operation <b>16</b> times).<br>3. Change <b>3 5 10 15</b> to <b>1 3 10 32</b> (by applying the operation <b>17</b> times).<br>Now, all secrets in the range <b>[1-9]</b> will go through <b>1-2-4</b> and all secrets in the range <b>[10-32]</b> will go through <b>1-3-5</b>, finally reaching Prime.<br>And the total cost is <b>50</b>.</p><h4>Test Case:</h4><code>10 8<br>1 2 10 15<br>2 4 5 6<br>3 4 1 7<br>1 5 17 26<br>7 10 23 32<br>6 9 1 9<br>5 8 2 21<br>4 7 8 9<br></code>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "8254c329a92850f6d539dd376f4816ee2764517da5e0235514af433164480d7a"

		},

		/* 12 */
		//-- ekam
		12 : {

			'questionStatement': "You have a new professor of graph theory and he speaks very quickly. You come up with the following plan to keep up with his lecture and make notes.<br>You know two languages, and the professor is giving the lecture in the first one. The words in both languages consist of lowercase English characters, each language consists of several words. For each language, all words are distinct, i.e. they are spelled differently. Moreover, the words of these languages have a one-to-one correspondence, that is, for each word in each language, there exists exactly one word in the other language having has the same meaning.<br>You can write down every word the professor says in either the first language or the second language. Of course, during the lecture you write down each word in the language in which the word is shorter. In case of equal lengths of the corresponding words you prefer the word of the first language.<br>You are given the text of the lecture the professor is going to read. Find out how the lecture will be recorded in your notes.<br><h4>Input</h4>The first line contains two integers, <b>n</b> and <b>m</b> - the number of words in the professor's lecture and the number of words in each of these languages.<br>The following <b>m</b> lines contain the words. The <b>i-th</b> line contains two strings <b>ai, bi</b> meaning that the word ai belongs to the first language, the word bi belongs to the second language, and these two words have the same meaning. It is guaranteed that no word occurs in both languages, and each word occurs in its language exactly once.<br>The next line contains <b>n</b> space-separated strings <b>c1,c2,...,cn</b> - the text of the lecture. It is guaranteed that each of the strings <b>ci</b> belongs to the set of strings <b>{a1,a2,...am}</b>.<br>All the strings in the input are non-empty, each consisting of no more than 10 lowercase English letters.<br><h4>Output</h4>Output exactly n words: how you will record the lecture in your notebook. Output the words of the lecture in the same order as in the input.<br><h4>Sample Input</h4><code>5 3<br>joll wuqrd<br>euzf un<br>hbnyiyc rsoqqveh<br>hbnyiyc joll joll euzf joll<br></code><h4>Sample Output</h4><code>hbnyiyc joll joll un joll</code><br><h4>Test Input</h4><code>20 22<br>azbrll oen<br>gh vdyayei<br>jphveblohx vfglv<br>mfyxib jepnvhcuwo<br>rpikazqj uam<br>l rx<br>okjenof qpnyi<br>j tixqrno<br>od itozmfct<br>ikkdxmirx ev<br>qexftojc p<br>kdazb zjs<br>mbk ykvqjrxaxu<br>hbcwhouzq pwt<br>mirpsz zfaegpl<br>uhkkvcj rlvwj<br>ef iqnnwtolrc<br>pjzfcpmeag ecdayth<br>sa qcthz<br>cbfhfxi qrnbvdryz<br>wqel tj<br>atx smkbid<br>ef hbcwhouzq cbfhfxi hbcwhouzq mirpsz cbfhfxi cbfhfxi okjenof pjzfcpmeag kdazb ef hbcwhouzq cbfhfxi hbcwhouzq mirpsz cbfhfxi cbfhfxi okjenof pjzfcpmeag kdazb<br></code>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "e8dac14aca3961d11a4fe79da48b07e0bd82b950ae555ab23df7894735d193a5"

		},

		/* 13 */
		//-- ekam 
		13 : {

			'questionStatement': "It is lunch time for Mole. His friend, Marmot, prepared him a nice game for lunch.<br>Marmot brought Mole <b>n</b> ordered piles of worms such that i<sup>th</sup> pile contains a[i] worms. He labeled all these worms with consecutive integers: worms in first pile are labeled with numbers 1 to a[1], worms in second pile are labeled with numbers a[1] + 1 to a[1] + a[2] and so on. See the example for a better understanding.<br>Mole can't eat all the worms (Marmot brought a lot) and, as we all know, Mole is blind, so Marmot tells him the labels of the best juicy worms. Marmot will only give Mole a worm if Mole says correctly in which pile this worm is contained.<br>Poor Mole asks for your help. For all juicy worms said by Marmot, tell Mole the correct answers.<br><h4>Input</h4>The first line contains a single integer <b>n</b>, the number of piles.<br>The second line contains <b>n</b> integers a[1], a[2], ..., a[n], where a[i] is the number of worms in the i<sup>th</sup> pile.<br>The third line contains single integer <b>m</b>, the number of juicy worms said by Marmot.<br>The fourth line contains <b>m</b> integers q[1], q[2], ..., q[m], the labels of the juicy worms.<br><h4>Output</h4>Print <b>m</b> space separated integers to the standard output. The i<sup>th</sup> integer represents the number of the pile where the worm labeled with the number q[i] is.<br><h4>Sample Input</h4><code>5<br>2 7 3 4 9<br>3<br>1 25 11</code><br><h4>Sample Output</h4><code>1 5 3</code><br><h4>Test case</h4><code>15<br>10 13 20 33 47 69 72 41 38 2 7 102 97 65 41<br>8<br>22 78 101 78 33 208 44 39<br></code>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "3cf49d33608edba480c91f4247780c2ccefedc41b16c39d5a317a6e2c2843985",

		},

		/* 14 */
		// shounak
		14 : {

			'questionStatement': "<p>You are given the equation: <code>z = [x/2] + y + xy</code><br>where, [x] denotes the floor value of x.<br>The above equation is unsolvable for some values of z. If we arrange these values in ascending order, we get a sequence. Find the <code>n<sup>th</sup></code> value in this sequence. Since the value can be large, find the value modulo 1000000007. <br><br>Required data:<br><code>2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607, 1279, 2203, 2281, 3217, 4253, 4423, 9689, 9941, 11213, 19937, 21701, 23209, 44497, 86243, 110503, 132049, 216091, 756839, 859433, 1257787, 1398269, 2976221, 3021377, 6972593, 13466917, 20996011, 24036583, 25964951, 30402457, 32582657, 37156667 </code><h4>Sample Input</h4><code>28</code><br><h4>Sample Output</h4><code>485739298<br></code><h4>Test case</h4><code>40</code></p>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "1b16b1df538ba12dc3f97edbb85caa7050d46c148134290feba80f8236c83db9",

		},

		/* 15 */
		// shounak 
		15 : {

			'questionStatement': "<p>Sidhant is bored in his hostel and he decides to play football in the corridor. The corridor is shaped as a rectangular parallelpiped. Formally the corridor has a door, a ceiling, a floor and two walls. Consider a 3-D space. The door of the corridor will be a rectangle on the xOz plane, such that the lower left corner of the door is located at point (0,0,0) and the upper right corner is located at the point (a,0,b). The corridor is infinite in the dirction of increasing y. The floor in the corridor will be the plane xOy. The ceiling of the corridor will be a plane parallel to the plane xOy and it passes through the point (a,0,b). One of the walls is the plane yOz and the other is a plane parallel to the plane yOz passing through the poing (a,0,b). The ball hits the door when the y coordinate of the ball becomes 0. <br>Now, Sidhant takes the ball to a distance of m away from the door, i.e, he places the ball at the point (a/2,m,0). Now he hits the ball with a velocity vector of (vx,vy,vz). The ball bounced of the walls, ceiling, floor and finally hit the door at a spot (x,0,z). Find the values of x,z. Assume that Sidhant's world follows laws of an ideal physical model, i.e, ideal laws of reflection, zero friction, zero gravity, no loss of energy and no air resistance.Print exactly 9 digits after the decimal point.<br><center><img src='../img/q15.jpg'></center> <br><br><br><h4>Sample Input</h4><code>7 2 11<br>3 -11 2<br></code><h4>Sample Output</h4><code>6.5000000000 2.0000000000<br></code><h4>Test case</h4><code>41 4 58<br>81 -9 65</code></p>",
			'attempts' : 7,
			'solved' : false,
			'attempted' : false,
			'score' : 50,
			'answer' : "65c74c15a686187bb6bbf9958f494fc6b80068034a659a9ad44991b08c58f2d2",

		},

		/* 16 */
		//-- aritra 
		16 : {

			'questionStatement': "<h3>Knapsack</h3>Given weights and values of <b>n</b> items, put these items in a knapsack of capacity <b>W</b> to get the maximum total value in the knapsack. In other words, given two integer arrays <b>val [0..n-1]</b> and <b>wt [0..n-1]</b> which represent values and weights associated with <b>n</b> items respectively. Also given an integer <b>W</b> which represents knapsack capacity, wrote the pseudo code to find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to <b>W</b>. You cannot break an item, either pick the complete item, or don't pick it."

		},

		/* 17 */
		//-- aritra 
		17 : {

			'questionStatement' : "<h3>Printers</h3>Shounak has decided to buy a new printer, but the printer's software doesn't seem to be working, so he decides to write a program that will do this for him, his program must print itself without the use of any file handling operations. He manages to do it. Can you?"

		},

		/* 18 */
		//-- aritra 
		18 : {

			'questionStatement' : "<h3>N-Queens</h3>In this questions you're expected to write an efficient algorithm to the famous N queens problem. To the uninitiated, the N Queens problem is the problem of placing N queens in an NxN chessboard such that no two queens threaten each other. A queen is said to threaten another, when the two queens are either in the same row, same column or on the same diagonal. Points will be awarded based on efficiency of the algorithm."

		},

		/* 19 */
		//-- aritra 
		19 : {

			'questionStatement' : "<h3>Lots of Prime</h3> Prime numbers are a major part of modern day cryptography, thus generation of prime numbers is a very important need. This question requires you to write an algorithm to efficiently find the first <b>N</b> prime numbers, where <b>N</b> is a number less than 10<sup>6</sup>."

		},

		/* 20 */
		//-- aritra 
		20 : {

			'questionStatement' : "<h3>Odd one out</h3>Given an array of numbers in which every element occurs three times, except one write an efficient algorithm to find the number that occurs only once."

		}

	};
// console.log(questions)