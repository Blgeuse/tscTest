class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User('Ivan');

class Admin {
  role!: number;
}

const admin = new Admin();
admin.role = 1;
