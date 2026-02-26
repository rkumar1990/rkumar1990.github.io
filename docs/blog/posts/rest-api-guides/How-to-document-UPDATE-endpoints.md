---
title: How to document UPDATE endpoints
layout: default
---

# How to document UPDATE endpoints

The UPDATE operation change existing resources and its data in the database.

## What to document for UPDATE endpoints

For each UPDATE endpoint, include:

1. **Purpose**: What gets updated.
2. **Method and URL**: `PUT` for full replace, `PATCH` for partial update.
3. **Authentication and headers**: Token plus conditional headers if used.
4. **Updatable fields**: Explicitly list mutable and immutable fields.
5. **Validation and business rules**: Field constraints and prohibited transitions.
6. **Success and conflict responses**: Typical `200`, `204`, `400`, `404`, `409`.

## Example: Update user role

- **Endpoint summary**: Updates the role of an existing user.
- **Method**: `PATCH`
- **URL**: `/api/v1/users/{id}`
- **Authentication**: Bearer token required

### Path parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id | string | Yes | Unique user identifier |

### Request body

| Field | Type | Required | Validation | Description |
|------|------|----------|------------|-------------|
| role | string | Yes | `admin`, `editor`, `viewer` | New user role |

### Request example

```bash
curl -X PATCH "https://api.example.com/api/v1/users/u_456" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "role": "admin"
  }'
```

### Success response (200)

```json
{
  "id": "u_456",
  "name": "Asha Verma",
  "email": "asha.verma@example.com",
  "role": "admin",
  "updatedAt": "2026-02-24T11:15:00Z"
}
```

### Conflict response (409)

```json
{
  "error": {
    "code": "ROLE_CHANGE_NOT_ALLOWED",
    "message": "Cannot change role for suspended users"
  }
}
```