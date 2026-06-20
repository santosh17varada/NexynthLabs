"""Extract comparison frames from two MP4 files."""
from __future__ import annotations

import shutil
import subprocess
import sys
from pathlib import Path

NEXYNTH = Path(
    r"c:\Users\santosh.varada\AppData\Local\Packages\Microsoft.ScreenSketch_8wekyb3d8bbwe\TempState\Recordings\20260620-0738-00.4766923.mp4"
)
STRIPE = Path(r"d:\Santosh\stripe interactive2.mp4")
OUT = Path(r"d:\Santosh\NexynthLabs\nexynthlabs-website\public\_compare")
TIMES = ["00:00:01", "00:00:03", "00:00:05", "00:00:08"]


def main() -> int:
    ffmpeg = shutil.which("ffmpeg")
    if not ffmpeg:
        print("ffmpeg not found on PATH", file=sys.stderr)
        return 1

    OUT.mkdir(parents=True, exist_ok=True)

    for label, video in [("nexynth", NEXYNTH), ("stripe", STRIPE)]:
        if not video.exists():
            print(f"missing: {video}", file=sys.stderr)
            return 1
        for index, timestamp in enumerate(TIMES):
            output = OUT / f"{label}-frame-{index + 1}.jpg"
            cmd = [
                ffmpeg,
                "-y",
                "-ss",
                timestamp,
                "-i",
                str(video),
                "-frames:v",
                "1",
                "-q:v",
                "2",
                str(output),
            ]
            result = subprocess.run(cmd, capture_output=True, text=True)
            if result.returncode != 0:
                print(result.stderr, file=sys.stderr)
                return result.returncode
            print(f"wrote {output}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
