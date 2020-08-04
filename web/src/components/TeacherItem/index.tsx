import React from "react";

import WhatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/6912596?s=460&u=5cfe27b5ada871867e8f9d88384689e73d72f70c&v=4"
          alt="Professor"
        />

        <div>
          <strong>Eduardo Fridry</strong>
          <span>Algoritmos</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <br />
        <br />
        Deserunt explicabo sapiente consequuntur expedita, dolores laudantium
        iure aliquid mollitia inventore ab. Dolor, vitae?
      </p>

      <footer>
        <p>
          Preço/hora<strong>R$ 77,00</strong>
        </p>
        <button type="button">
          <img src={WhatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
