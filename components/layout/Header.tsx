import React from "react";
import Logo from "./Logo";
import CartButton from "./CartButton";
import UserNav from "./user-nav";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 shadow">
      <div className="justify-between container mx-auto p-4 flex items-center">
        <Logo />
        <div className="flex items-center justify-center space-x-4">
          <CartButton />
          <UserNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

// SOBRE [STICKY]
// #elemento {
//   position: -webkit-sticky; /* Para navegadores que usam o prefixo -webkit- */
//   position: sticky;
//   top: 20px; /* ou qualquer outra unidade de medida */
// }
// EXPLICAÇÃO ====
// Neste exemplo, o elemento se comportará como position:
// relative até que o bloco atinja 20 pixels do topo da janela de
// visualização, momento em que ele se tornará position: fixed e
// permanecerá "colado"na parte superior da janela enquanto o usuário
// rola a página.
