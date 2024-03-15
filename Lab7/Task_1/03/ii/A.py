N = int(input())

for i in range(1, N + 1):
    square = i * i
    if square <= N:
        print(square)
    else:
        break
