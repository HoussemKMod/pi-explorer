import React from 'react'
import {networks} from '../../lib/stellar'
import CustomNetworkButton from '../shared/CustomNetworkButton'

const networkAddresses = {
  testnet1: 'https://cors-anywhere.herokuapp.com/http://testnet1.minepi.com:31401/',
  testnet2: 'https://cors-anywhere.herokuapp.com/http://testnet2.minepi.com:31401/',
  testnet3: 'https://cors-anywhere.herokuapp.com/http://testnet3.minepi.com:31401/',
}

const NetworkButton = ({networkType, selectedNetworkType, setNetworkAddress}) =>
  <button
    className={networkType === selectedNetworkType ? 'is-active' : 'is-inactive'}
    onClick={e => setNetworkAddress(networkType, networkAddresses[networkType])}
  >
    {networkType.toUpperCase()}
  </button>

const NetworkSelector = properties =>
  <div className="Network-Selector">
    {Object.keys(networks).map(networkType =>
      <NetworkButton
        key={networkType}
        hide={networks[networkType].hide}
        networkType={networkType}
        selectedNetworkType={properties.networkType}
        setNetworkAddress={properties.setNetworkAddress}
      />,
    )}
    <CustomNetworkButton
      key="custom-network"
      networkAddress={properties.networkAddress}
      networkType={properties.networkType}
      setNetworkAddress={properties.setNetworkAddress}
    />
  </div>

export default NetworkSelector
