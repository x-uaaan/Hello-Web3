import { SuiClient } from '@mysten/sui/client';
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { generateNonce, generateRandomness } from '@mysten/sui/zklogin';
import { jwtDecode } from 'jwt-decode';

const FULLNODE_URL = 'https://fullnode.testnet.sui.io';

class ZkLoginService {
  constructor() {
    this.client = new SuiClient({ url: FULLNODE_URL });
  }

  async initializeZkLogin() {
    try {
      console.log('Step 1: Generating ephemeral keypair...');
      const { epoch } = await this.client.getLatestSuiSystemState();
      this.maxEpoch = Number(epoch) + 2;
      this.ephemeralKeypair = new Ed25519Keypair();
      const randomness = generateRandomness();
      this.nonce = generateNonce(this.ephemeralKeypair.getPublicKey(), this.maxEpoch, randomness);
      
      sessionStorage.setItem('ephemeralKeypair', this.ephemeralKeypair.getSecretKey());
      sessionStorage.setItem('maxEpoch', this.maxEpoch.toString());
      sessionStorage.setItem('nonce', this.nonce);
      sessionStorage.setItem('randomness', randomness);

      return {
        nonce: this.nonce,
        maxEpoch: this.maxEpoch,
        ephemeralPublicKey: this.ephemeralKeypair.getPublicKey().toBase64()
      };
    } catch (error) {
      console.error('Failed to initialize zkLogin:', error);
      throw error;
    }
  }

  constructGoogleOAuthUrl(clientId, redirectUri) {
    const params = new URLSearchParams({
      client_id: clientId,
      response_type: 'id_token',
      redirect_uri: redirectUri,
      scope: 'openid email profile',
      nonce: this.nonce
    });
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
    console.log('OAuth URL constructed successfully');
    return oauthUrl;
  }

  async processJWT(idToken) {
    try {
      const decodedJwt = jwtDecode(idToken);
      if (!decodedJwt.sub || !decodedJwt.aud || !decodedJwt.iss) {
        throw new Error('Invalid JWT structure');
      }
      sessionStorage.setItem('jwt', idToken);
      sessionStorage.setItem('decodedJwt', JSON.stringify(decodedJwt));
      return decodedJwt;
    } catch (error) {
      console.error('Failed to process JWT:', error);
      throw error;
    }
  }

  async getUserSalt(jwt) {
    const userSalt = 'simulated_salt_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('userSalt', userSalt);
    return userSalt;
  }

  async getZkProof(jwt, userSalt) {
    const zkProof = { proofPoints: { a: ['sim1', 'sim2'], b: [['sim3', 'sim4']], c: ['sim5', 'sim6'] } };
    sessionStorage.setItem('zkProof', JSON.stringify(zkProof));
    return zkProof;
  }

  computeZkLoginAddress(decodedJwt, userSalt) {
    const zkLoginAddress = '0x' + Array.from({ length: 64 }, () => 
      Math.floor(Math.random() * 16).toString(16)).join('');
    sessionStorage.setItem('zkLoginAddress', zkLoginAddress);
    return zkLoginAddress;
  }

  clearSession() {
    sessionStorage.removeItem('ephemeralKeypair');
    sessionStorage.removeItem('maxEpoch');
    sessionStorage.removeItem('nonce');
    sessionStorage.removeItem('randomness');
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('decodedJwt');
    sessionStorage.removeItem('userSalt');
    sessionStorage.removeItem('zkProof');
    sessionStorage.removeItem('zkLoginAddress');
  }
}

export default ZkLoginService;
