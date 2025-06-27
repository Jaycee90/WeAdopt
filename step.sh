# 1. Login
az login

# 2. Set subscription
az account set --subscription "MyProductionSubscription"

# 3. Create resource group
az group create --name myResourceGroup --location eastus

# 4. Create AKS cluster
az aks create \
  --resource-group myResourceGroup \
  --name myAKSCluster \
  --node-count 3 \
  --enable-addons monitoring \
  --generate-ssh-keys

# 5. Get credentials
az aks get-credentials \
  --resource-group myResourceGroup \
  --name myAKSCluster

# 6. Verify
kubectl get nodes
