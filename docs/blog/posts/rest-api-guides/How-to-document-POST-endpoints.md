---
title: How to document POST endpoints
layout: default
---

# How to document POST endpoints

POST endpoints create resources, so your documentation must clearly describe required fields, validation rules, and failure behavior.

## What to document for POST endpoints

For each POST endpoint, include:

1. **Purpose**: What resource gets created.
2. **Method and URL**: For example, `POST /api/v1/users`.
3. **Authentication and headers**: Required token and `Content-Type`.
4. **Request body schema**: Field name, type, required status, and validation.
5. **Success response**: Usually `201 Created` with created resource payload.
6. **Validation and error responses**: Common `400`, `401`, and `409` patterns.

## Example: Create a new user

- **Endpoint summary**: Creates a new user account.
- **Method**: `POST`
- **URL**: `/api/v1/users`
- **Authentication**: Bearer token required
- **Headers**:
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`

### Request body

| Field | Type | Required | Validation | Description |
|------|------|----------|------------|-------------|
| name | string | Yes | 2-100 characters | Full name of the user |
| email | string | Yes | Valid email format, unique | User email address |
| role | string | No | `admin`, `editor`, `viewer` | Access role |

### Request example

```bash
curl -X POST "https://api.example.com/api/v1/users" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "name": "Asha Verma",
    "email": "asha.verma@example.com",
    "role": "editor"
  }'
```

### Success response (201)

```json
{
  "id": "u_456",
  "name": "Asha Verma",
  "email": "asha.verma@example.com",
  "role": "editor",
  "createdAt": "2026-02-24T10:30:00Z"
}
```

### Validation error (400)

```json
{
  "error": {
    "code": "INVALID_EMAIL",
    "message": "email must be a valid email address"
  }
}
```


