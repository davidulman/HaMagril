const canvas = require("canvas");
const { registerFont } = require("canvas");
const fs = require("fs");

// Register the Arial font
registerFont("arial.ttf", { family: "Arial" });

// Set the size of the lotto ball images
const size = 200;

// Generate the lotto ball images
for (let i = 1; i <= 37; i++) {
  // Create a canvas with the specified size
  const c = canvas.createCanvas(size, size);
  const ctx = c.getContext("2d");

  // Draw a light blue background
  ctx.fillStyle = "transparent";
  ctx.fillRect(0, 0, size, size);

  // Draw a white circle
  ctx.fillStyle = "#84DDFA";
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();

  // Draw a black border around the circle
  ctx.strokeStyle = "#84DDFA";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.stroke();

  // Draw the number in the middle of the circle
  ctx.fillStyle = "black";
  ctx.font = "bold 80px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(i, size / 2, size / 2);

  // Save the image to a file
  const out = fs.createWriteStream(`lotto_ball_${i}.png`);
  const stream = c.createPNGStream();
  stream.pipe(out);
  out.on("finish", () =>
    console.log(`The image was saved to lotto_ball_${i}.png`)
  );
}
