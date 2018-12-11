let {Keystore, Keygen} = require('eosjs-keygen')
Eos = require('eosjs')

sessionConfig = {
  timeoutInMin: 30,
  uriRules: {
    'owner' : '/account_recovery',
    'active': '/(transfer|contracts)',
    'active/**': '/producers'
  }
}

keystore = Keystore('myaccount', sessionConfig)
// eos = Eos.Testnet({keyProvider: keystore.keyProvider})

Keygen.generateMasterKeys().then(keys => {
  // create blockchain account called 'myaccount'
  console.log(keys)

  // eos.getAccount('myaccount').then(account => {
  //   keystore.deriveKeys({
  //     parent: keys.masterPrivateKey,
  //     accountPermissions: account.permissions
  //   })
  // })

})
