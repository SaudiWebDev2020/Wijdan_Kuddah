class BankAccount:
    def __init__(self, int_rate = 0.01, balance = 0):
        self.int_rate = float(int_rate) / 100
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            self.balance -= 5
            print("Insufficient funds: Charging a $5 fee")
        return self
    def display_account_info(self):
        print("Balance: $%d" % (self.balance))
        return self
    def yield_interest(self):
        if self.balance > 0:
            self.balance += (self.balance * self.int_rate)
        return self

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=2, balance=0)
    def make_deposit(self, amount):	
        self.account.deposit(amount)
        return self
    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self
    def display_user_balance(self):
        print("User: %s, Balance: $%d" % (self.name, self.account.balance))
        # print(f"User: {self.name}, Balance: $ {self.account.balance}")
        return self
    def transfer_money(self, other_user, amount):
        self.account.withdraw(amount)
        other_user.make_deposit(amount)
        return self

# Create 3 instances of the User class
wijdan = User('wijdan', 'wijdan.w.k@outlook.sa')
yara = User('yara', 'yara@email.com')
phil = User('phil', 'phil@email.com')

# Have the first user make 3 deposits and 1 withdrawal and then display their balance
wijdan.make_deposit(200).make_deposit(100).make_deposit(50).make_withdrawal(90).display_user_balance()

# Have the second user make 2 deposits and 2 withdrawals and then display their balance
yara.make_deposit(300).make_deposit(200).make_withdrawal(20).make_withdrawal(30).display_user_balance()

# Have the third user make 1 deposits and 3 withdrawals and then display their balance
phil.make_deposit(500).make_withdrawal(20).make_withdrawal(30).make_withdrawal(10).display_user_balance()

# BONUS: Add a transfer_money method; have the first user transfer money to the third user and then print both users' balances
wijdan.transfer_money(yara, 10)
yara.display_user_balance()
wijdan.display_user_balance()

