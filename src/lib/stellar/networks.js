const networks = {
  testnet1: 'testnet1',
  testnet2: 'testnet2',
  testnet3: 'testnet3',
}

const hostnameToNetworkType = hostname => {
  if (hostname === 'testnet3.local') {
return networks.testnet3
} else if (hostname === 'testnet2.local') {
return networks.testnet2
} else {
return networks.testnet1
}
}

export {networks as default, hostnameToNetworkType}
