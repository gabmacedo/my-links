import { WhiteCard } from "./WhiteCard";
import { SocialButton } from "./SocialButton";
import { GithubIcon } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import { ScrollTextIcon } from "lucide-react";
import { MailIcon } from "lucide-react";
import { useState } from "react";

export function MainCard() {
  const [emailStatus, setEmailStatus] = useState("Email");
  const email = "gabriel.adem001@gmail.com";

  const handleGitHubClick = () => {
    window.open("https://github.com/gabmacedo", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/gabmacedo", "_blank");
  };

  const handleCvClick = () => {
    window.open(
      "https://drive.google.com/file/d/1wHWN7ehhFG3FhbeEU_x_byx5S8q9OOQg/view?usp=sharing",
      "_blank"
    );
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText(email).then(() => {
      setEmailStatus("Copiado!");
      setTimeout(() => {
        setEmailStatus("Email");
      }, 900);
    });
  };

  return (
    <div className="h-[500px] w-[360px] flex flex-col gap-3">
      <div className="flex w-[100%] gap-2">
        <WhiteCard
          iconHidden={"block"}
          value={"Gabriel Macedo"}
          size={"w-[60%]"}
          cursor={'cursor-pointer'}
        />
        <WhiteCard
          iconHidden={"hidden"}
          value={"2025 - 2025"}
          size={"w-[40%]"}
        />
      </div>

      <div className="bg-zinc-700 rounded-2xl p-3 flex flex-col gap-3 border border-zinc-500 h-auto">
        <div class="flex items-center justify-center">
          <div class="text-white bg-zinc-900 p-1.5 pl-4 pr-4 border border-zinc-600 rounded-4xl inset-shadow-sm inset-shadow-black ">
            <h2>
              M<span class="italic">eus</span> <strong>Links</strong>
            </h2>
          </div>
        </div>
        <SocialButton value={"Meu GitHub"} onClick={handleGitHubClick}>
          <GithubIcon size={20} />
        </SocialButton>
        <SocialButton value={"Meu LinkedIn"} onClick={handleLinkedinClick}>
          <LinkedinIcon size={20} />
        </SocialButton>
        <SocialButton value={"Meu Currículo"} onClick={handleCvClick}>
          <ScrollTextIcon size={20} />
        </SocialButton>

        <span class="text-white text-center">Contato</span>

        <SocialButton value={emailStatus} onClick={handleEmailClick}>
          <MailIcon size={20} />
        </SocialButton>
      </div>
    </div>
  );
}
