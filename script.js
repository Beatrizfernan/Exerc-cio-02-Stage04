const students = [
    {
        name: "Beatriz",
        firstTestScore: 8,
        secondTestScore: 10,

    },

    {
        name: "Roberta",
        firstTestScore: 2,
        secondTestScore: 0,
    },
    {
        name: "Larissa",
        firstTestScore: 8,
        secondTestScore: 2,
    },

]



function media(score1, score2, namestudent) {
    const average = ((score1 + score2) / 2).toFixed(2);
    const result = (score1 + score2) / 2 >= 7;
    if (result) {
      return `A média do aluno(a) ${namestudent} é: ${average}.\n Parabéns ${namestudent}!!! Você foi aprovado no concurso!!!`
    }
  
    return `A média do aluno(a) ${namestudent} é: ${average}.\n Não foi dessa vez ${namestudent}!!! Tente novamente!!!`
  }


students.map((student) => {
    alert(media(student.firstTestScore, student.secondTestScore, student.name));

});










