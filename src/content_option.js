const logotext = "lubtd";
const meta = {
  title: "lubtd",
  description: "Lucas",
};

const introdata = {
  portrait: "https://i.imgur.com/DMnZsiY.png",
  title: "I’m Lucas,",
  animated: {
    first: "a DeFi builder.",
    second: "a product leader.",
    third: "a software engineer.",
  },
  description:
    "I'm a French mathematics graduate working in blockchain technology for more than 4 years. I'm dedicated to delivering high-quality solutions to drive positive changes in the finance industry.",
  your_img_url: "https://i.imgur.com/RMrFwlq.jpg",
};

const dataprojects = [
  {
    img: "https://i.imgur.com/XxbRzO5.png",
    title: "Ignite Chain",
    content: (
      <div>
        <p>
          A blockchain to launch new blockchains. A launchpad for Cosmos that
          allows to tokenize future chain coins distribution.
        </p>
        <p>I was the main architect and contributor of the project.</p>
        <h4>
          <a href="https://github.com/tendermint/spn">Blockchain source code</a>
        </h4>
        <h4>
          <a href="https://github.com/ignite/cli-plugin-network">
            Client source code
          </a>
        </h4>
        <h4>
          <a href="https://docs.ignite.com/nightly/network/introduction">
            Client documentation
          </a>
        </h4>
        <p>I'm also the main author of the whitepaper.</p>
        <h4>
          <a href="https://github.com/tendermint/spn/blob/main/papers/whitepaper.pdf">
            Whitepaper
          </a>
        </h4>
      </div>
    ),
  },
  {
    img: "https://i.imgur.com/etECAzp.png",
    title: "Ignite CLI",
    content: (
      <div>
        <p>
          A CLI tool to build app chains, used by major actors of the Cosmos
          ecosystem.
        </p>
        <p>I was part of the core team of the project.</p>
        <h4>
          <a href="https://ignite.com">Website</a>
        </h4>
        <h4>
          <a href="https://github.com/ignite/cli">Source code</a>
        </h4>
        <h4>
          <a href="https://docs.ignite.com/">Documentation</a>
        </h4>
      </div>
    ),
  },

  {
    img: "https://i.imgur.com/o1tZK0b.png",
    title: "Request Protocol",
    content: (
      <div>
        <p>An open network for payment requests.</p>
        <p>
          I contributed to the design and development of the different layers of
          the protocol.
        </p>

        <h4>
          <a href="https://github.com/RequestNetwork/requestNetwork">
            Source code
          </a>
        </h4>
        <h4>
          <a href="https://docs.request.network/">Documentation</a>
        </h4>
      </div>
    ),
  },
  {
    img: "https://i.imgur.com/Mfq75Wv.png",
    title: "Ignite Modules",
    content: (
      <div>
        <p>
          A collection of Cosmos SDK modules to harness the modularity of the
          Cosmos SDK.
        </p>
        <p>I was the main architect of the project.</p>
        <h4>
          <a href="https://github.com/ignite/modules">Source code</a>
        </h4>
      </div>
    ),
  },
  {
    img: "https://i.imgur.com/13C8JI5.png",
    title: "Interchange",
    content: (
      <div>
        <p>
          A tutorial to learn IBC (Inter-blockchain communication protocol) by
          building a decentralized exchange between two chains.
        </p>
        <p>I wrote the concept and first version of the module.</p>
        <h4>
          <a href="https://github.com/tendermint/interchange">Source code</a>
        </h4>
        <h4>
          <a href="https://docs.ignite.com/guide/interchange">Tutorial</a>
        </h4>
      </div>
    ),
  },
  {
    img: "https://i.imgur.com/qBJKp1f.png",
    title: "Cantodao",
    content: (
      <div>
        <p>DAO tooling for Canto network.</p>
        <p>Awarded as Notable Build during Canto 5th Hackathon.</p>
        <h4>
          <a href="https://cantodao.com/">Website</a>
        </h4>
        <h4>
          <a href="https://github.com/lumtis/cantodao">
            Smart contracts source code
          </a>
        </h4>
        <p>The front-end is built using React and Ethers.js.</p>
        <h4>
          <a href="https://github.com/lumtis/cantodao-interface">
            Front-end source code
          </a>
        </h4>
      </div>
    ),
    link: "https://docs.ignite.com/guide/interchange",
  },
];

const socialprofils = {
  github: "https://github.com/lumtis",
  linkedin: "https://www.linkedin.com/in/lucas-bertrand/",
  twitter: "https://twitter.com/lumtis_",
  telegram: "https://t.me/lumtis",
};
export { dataprojects, introdata, logotext, meta, socialprofils };
