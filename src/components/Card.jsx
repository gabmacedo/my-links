// Componentes
import { WhiteCard } from "./WhiteCard";
import { SocialButton } from "./SocialButton";
import { CardTitle } from "./CardTitle";

// Icones
import { useState } from "react";

import {
  GithubIcon,
  SendIcon,
  LinkedinIcon,
  ScrollTextIcon,
  MailIcon,
  LinkIcon,
} from "lucide-react";

const links = {
  github: "https://github.com/gabmacedo",
  linkedin: "https://www.linkedin.com/in/gabmacedo",
  cv: "https://drive.google.com/file/d/1wHWN7ehhFG3FhbeEU_x_byx5S8q9OOQg/view?usp=sharing"
}

export function MainCard() {
  const [emailStatus, setEmailStatus] = useState("Email");
  const email = "gabriel.adem001@gmail.com";

  const handleGitHubClick = () => {
    window.open(links.github, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(links.linkedin, "_blank");
  };

  const handleCvClick = () => {
    window.open(
      links.cv,
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
        <WhiteCard iconHidden={"block"} value={"Gabriel Macedo"} size={"w-[60%]"} cursor={"cursor-pointer"}
        />
        <WhiteCard iconHidden={"hidden"} value={"2025 - 2025"} size={"w-[40%]"}
        />
      </div>

      <div className="bg-zinc-700 border-zinc-500 rounded-2xl p-3 flex flex-col gap-3 border h-auto">
        <CardTitle value={"Meus Links"}>
          <LinkIcon size={16} />
        </CardTitle>

        <SocialButton value={"Meu GitHub"} onClick={handleGitHubClick}>
          <GithubIcon size={20} className="text-white" />
        </SocialButton>
        <SocialButton value={"Meu LinkedIn"} onClick={handleLinkedinClick}>
          <LinkedinIcon size={20} className="text-blue-400" />
        </SocialButton>
        <SocialButton value={"Meu Currículo"} onClick={handleCvClick}>
          <ScrollTextIcon size={20} className="text-green-400" />
        </SocialButton>

        <CardTitle value={"Contato"}>
          <SendIcon size={16} />
        </CardTitle>

        <SocialButton value={emailStatus} onClick={handleEmailClick}>
          <MailIcon size={20} className="text-red-400" />
        </SocialButton>
      </div>
    </div>
  );
}
