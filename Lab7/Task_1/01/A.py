import math
a = int(input("Введите 1 катет а = "))
b = int(input("Введите 2 катет b = "))

def gipotenuza(a, b):
    return math.sqrt(math.pow(a, 2) + math.pow(b,2))

print("Гипотенуза с катетами a, b = ",gipotenuza(a, b) )