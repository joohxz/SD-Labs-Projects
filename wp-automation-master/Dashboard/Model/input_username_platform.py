


class TalabatAccount:

    def __init__(self):

        self.username = None
        self.password = None

        pass




    def store_account(self, username, password):

        self.username = username
        self.password = password

        return self.username, self.password


