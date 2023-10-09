import React from "react";
import styled from "styled-components";
import House from "../assets/house-1836070_1280.jpg";
import Clouds from "../assets/field-533541_1280.jpg";
function Home() {
  return (
    <Wrapper>
      <div className="about">
        <img src={House} alt="house" className="house" />
        {/* <img src={Clouds} alt="clouds" className="clouds" /> */}
        <h1>Welcome</h1>
      </div>

      {/* lists */}
      <div className="lists">
        ] Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
        explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
        voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum,
        quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam
        [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam
        quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d]
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? [D]Quis autem vel eum i[r]ure reprehenderit, qui in
        ea voluptate velit esse, quam nihil molestiae consequatur, vel illum,
        qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et
        accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium
        voluptatum deleniti atque corrupti, quos dolores et quas molestias
        excepturi sint, obcaecati cupiditate non provident, similique sunt in
        culpa, qui officia deserunt mollitia animi, id est laborum et dolorum
        fuga. Et harum quidem reru[d]um facilis est e[r]t expedita distinctio.
        Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil
        impedit, quo minus id, quod maxime placeat facere possimus, omnis
        voluptas assumenda est, omnis dolor repellend[a]us. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe
        eveniet, ut et voluptates repudiandae sint et molestiae non recusandae.
        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat.
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height:100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 10px;

  .about {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    z-index: -1;
    transform-style: preserve-3d;

    .house,
    .clouds {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: drop-shadow(10px);
    }

    .house {
      z-index: 10;
      transform: translateZ(-10px) scale(2) ;
  
    }
  }

  .lists {
    background-color: white;
    font-size: 2rem;
  }
`;

export default Home;
