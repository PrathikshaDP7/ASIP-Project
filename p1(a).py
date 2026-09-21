a = float(input("enetr first number"))
b = float(input("enter second number"))

print("choose an operation")
print("1-Add")
print("2-Substration")
print("3-multiply")
print("4-divison")

choice = int(input("enter your choice"))

if choice==1:
    print("Result:",a+b)
elif choice==2:
    print("Result:",a-b)
elif choice==3:
    print("Result:",a*b)
elif choice==4:
  if b!=0:
    print("Result:",a/b)
  else:
     print("divison is not possible")
else:
   print("Invalid choice")    