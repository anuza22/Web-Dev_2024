v = int(input())
t = int(input())

start = 0
circumference = 109

position = (start + v * t) % circumference

print(position)