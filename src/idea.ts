export async function idea(n?: number) {
  if (!n) n = 3;

  let request: Response = await fetch(
    "https://raw.githubusercontent.com/NotSyntax/idea/master/ideas.txt",
  );

  let list: string = await request.text(); // Get the text file
  let words: string[] = list.split("\n"); // Split the file by line
  let ideas: string[] = words.filter((word) =>
    !word.startsWith("--") && word !== ""
  ); // Exclude comments

  let idea: any[] = [
    ...new Set(
      Array(n).fill("").map(() =>
        ideas[Math.floor(Math.random() * ideas.length)].replace(" ", "")
      ),
    ),
  ];

  return idea;
}
