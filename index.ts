class User {
  skills: string[];

  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills === 'string') {
      this.skills.push(skillOrSkills);
    } else {
      this.skills = this.skills.concat(skillOrSkills);
    }
  }
}
function run(distance: number): void;
function run(distance: string): void;
function run(distance: number | string): void {

}
