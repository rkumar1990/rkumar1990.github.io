---
title: How to document GET endpoints
layout: default
---

# How to document GET endpoints

The GET operation retrieves data from the server for the requested parameter.

## What to document for GET endpoints

For each GET endpoint, include:

1. **Purpose**: What data is returned.
2. **Method and URL**: For example, `GET /api/v1/users/{id}`.
3. **Authentication and headers**: Token requirements and optional headers.
4. **Path and query parameters**: Names, types, defaults, and validation rules.
5. **Pagination and sorting**: Structure and supported query options.
6. **Success and error responses**: Typical `200`, `400`, `401`, `404` payloads.

## Example: Get users list

- **Endpoint summary**: Returns a paginated list of users.
- **Method**: `GET`
- **URL**: `/api/v1/users?page=1&limit=20&sort=name`
- **Authentication**: Bearer token required

### Query parameters

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| page | integer | No | 1 | Page number |
| limit | integer | No | 20 | Items per page (max 100) |
| sort | string | No | `createdAt` | Sort field |

### Request example

```bash
curl -X GET "https://api.example.com/api/v1/users?page=1&limit=20&sort=name" \
  -H "Authorization: Bearer <token>"
```

### Success response (200)

```json
{
  "page": 1,
  "pageSize": 20,
  "total": 64,
  "items": [
    {
      "id": "u_101",
      "name": "Asha Verma",
      "email": "asha.verma@example.com"
    }
  ]
}
```

### Error response (400)

```json
{
  "error": {
    "code": "INVALID_QUERY_PARAM",
    "message": "limit must be between 1 and 100"
  }
}
```