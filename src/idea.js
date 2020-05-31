export async function idea(n) {
  if (!n) n = 3;

  let request = await fetch(
    "https://raw.githubusercontent.com/NotSyntax/idea/master/ideas.txt",
  );

  let list = await request.text(); // Get the text file
  let words = list.split("\n"); // Split the file by line
  let ideas = words.filter((word) => !word.startsWith("--") && word !== ""); // Exclude comments

  let idea = [
    ...new Set(
      Array(n).fill("").map(() =>
        ideas[Math.floor(Math.random() * ideas.length)].replace(" ", "")
      ),
    ),
  ];

  return idea;
}
