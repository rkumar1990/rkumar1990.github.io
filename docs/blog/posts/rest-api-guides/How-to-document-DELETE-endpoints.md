---
title: How to document DELETE endpoints
layout: default
---

# How to document DELETE endpoints

The DELETE operation remove resources from the database.

## What to document for DELETE endpoints

For each DELETE endpoint, include:

1. **Purpose**: Whether deletion is permanent or reversible.
2. **Method and URL**: For example, `DELETE /api/v1/users/{id}`.
3. **Authentication and authorization**: Who is allowed to delete.
4. **Delete model**: Hard delete vs soft delete behavior.
5. **Idempotency**: What happens if clients call DELETE multiple times.
6. **Success and error responses**: Typical `204`, `403`, `404`, `409`.

## Example: Delete a user

- **Endpoint summary**: Deletes a user account.
- **Method**: `DELETE`
- **URL**: `/api/v1/users/{id}`
- **Authentication**: Bearer token required with admin role

### Path parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id | string | Yes | Unique user identifier |

### Request example

```bash
curl -X DELETE "https://api.example.com/api/v1/users/u_456" \
  -H "Authorization: Bearer <token>"
```

### Success response (204)

No response body.

### Error response (403)

```json
{
  "error": {
    "code": "FORBIDDEN",
    "message": "Only administrators can delete users"
  }
}
```

### Error response (404)

```json
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "No user found with id u_456"
  }
}
```