terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.62.0"
    }

    circleci = {
      source  = "mrolla/circleci"
      version = "0.5.1"
    }
  }
}
