
const KEY = "study_group"

export function setGroup(group) {
    localStorage.setItem(KEY,group)
}

export function getGroup(){
    return localStorage
}