"use strict";
class User {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills = this.skills.concat(skillOrSkills);
        }
    }
}
function run(distance) {
}
