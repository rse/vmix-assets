
import yargs       from "yargs"
import { hideBin } from "yargs/helpers"
import sharp       from "sharp"

const argv = yargs(hideBin(process.argv)).argv

const W = argv.w ?? 1920
const H = argv.h ?? 1080

const buf = new Uint16Array(W * H * 4)
for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
        const i = (y * W + x) * 4
        buf[i+0] = (0xFFFF / W) * x  /* R = U */
        buf[i+1] = (0xFFFF / H) * y  /* G = V */
        buf[i+2] = 0x0000            /* B */
        buf[i+3] = 0xFFFF            /* A */
    }
}

sharp(buf, { raw: { width: W, height: H, channels: 4 } })
    .toColourspace("rgb16")
    .toFile(argv._[0] ?? "uvmap.png", (err, info) => {
        if (err) console.error(err)
    })

