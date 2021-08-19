//Consts
const Name: string = "WeaverSong";
const career: string = "RuneSmith";
const description: string = "Experienced RuneSmith, capable of even Runes of Binding. Also loves programming and spaceships.";
const interests: string[] = ["Programming", "Star Valor", "Runes of Power"];
const preExp: {CompanyName: string, JobTitle: string, Description: string}[] = [{CompanyName: "Rhunon", JobTitle: "Apprentice", Description: "for 3 years"},
                {CompanyName: "Shadow Queen Kilada", JobTitle: "Battlemage", Description: "for 7 years"},
                {CompanyName: "The Trade Syndicate", JobTitle: "RuneSmith", Description: "for 2 years"}];
const skills: {description: string, cool?:boolean}[] = [{description: "RuneForging", cool: true},
                {description: "Pixel art"},
                {description: "Javascript", cool: true},
                {description: "Breaking things"},
                {description: "Thinking of cool ideas"}];

//Functions
const displayPosition = function (CompanyName: string, JobTitle: string, Description: string)
{
    return (JobTitle + " for " + CompanyName + " - " + Description);
}

const displaySkill = function (skill: {description: string, cool?: boolean})
{
    if (skill.cool)
    {
        return ("BAM: " + skill.description);
    }
    return skill.description;
}

//I don't like all the separation lines, so I'm putting all the text in one variable.
let outPut: string = "";

//Resume
outPut += "Name: " + Name.toUpperCase() + "\n";
outPut += "Career: " + career + "\n";
outPut += "Description: " + description + "\n";
outPut += "\n";
outPut += "My Interests:\n";
interests.forEach(i => {
    outPut += "* " + i + "\n";
});
outPut += "\n";
outPut += "My Previous Experience:\n"
preExp.forEach(i => {
    outPut += "* " + displayPosition(i.CompanyName, i.JobTitle, i.Description) + "\n";
});
outPut += "\n";
outPut += "My Skills:\n";
skills.forEach(i => {
    outPut += "* " + displaySkill(i) + "\n";
});


//log
console.log(outPut);