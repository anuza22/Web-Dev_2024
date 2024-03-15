import math

N = int(input())

for i in range(2, math.isqrt(N) + 1):
    if N % i == 0:
        print(i)
        break
else:
    print(N)
