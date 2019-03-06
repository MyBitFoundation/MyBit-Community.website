import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm,
} from "drizzle-react-components";


export default ({ accounts }) => (
  <div className="App">
    <div>
      <h1>Admin Dashboard</h1>
      <p>Tooling dashboard to interact with the tokens created for the Community Portal.</p>
    </div>

    <div className="section">
      <h2>Active Account</h2>
      <AccountData accountIndex="0" units="ether" precision="3" />
    </div>

    <div className="section">
      <h2>NFTStore</h2>
      <p>
        Allows to create NFT Tokens.
      </p>
      <ContractForm
        contract="NFTStore"
        method="mintBadge"
        labels={["NFT Token URI", "Address to Receive NFT Token"]}
      />
      <p>
        <strong>NFT Balance: </strong>
        <ContractData
          contract="NFTStore"
          method="balanceOf"
          methodArgs={[accounts[0]]}
        />
      </p>
    </div>
  </div>
);
