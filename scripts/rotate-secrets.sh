

# Usage: ./rotate-secrets.sh ./.env
                 
echo "Updating GitHub Secrets with CLI..."

source $1;

gh secret set MNEMONIC --body "$MNEMONIC"
gh secret set HD_PATH --body "$HD_PATH"
gh secret set WEB3_PROVIDER --body "$WEB3_PROVIDER"