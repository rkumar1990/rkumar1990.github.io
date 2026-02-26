---
title: How to document REST API endpoints
layout: default
---

# How to document REST API endpoints

Clear API documentation helps developers understand your endpoints quickly and integrate it to their system. A good REST API guide should be easy to scan, consistent, and practical.

## Why REST API documentation matters

- Reduces back and forth  between developers and support teams
- Speeds up integration for internal and external consumers
- Improves reliability by clarifying required fields and expalian errors in detail.  

## What to include for each endpoint

For every endpoint, include these core sections:

1. **Endpoint summary**: What the endpoint does for a user.
2. **Method and URL**: For example, `GET /api/v1/users/{id}`.
3. **Authentication**: API key, OAuth token, or no auth required.
4. **Request parameters**:
   - Path parameters
   - Query parameters
   - Headers
5. **Request body**: Required and optional fields with data types.
6. **Response examples**: Success and failure responses.
7. **Status codes**: Meaning of codes such as 200, 400, 401, 404, 500.
8. **Error model**: Standard error format with sample payload.

## Documenting CRUD operations

REST APIs revolve around CRUD operations. Document each operation with a clear method, endpoint path, request details, and response details.

### Create (POST)

- **Purpose**: Create a new resource in the database.
- **Method and path**: `POST /api/v1/users`
- **What to document**:
  - Required and optional request body fields
  - Validation rules (format, range, uniqueness)
  - Success response (`201 Created`) with created resource
  - Request failures (`400 Bad Request`, `409 Conflict`)

### Read (GET)

- **Purpose**: Fetch one resource or a list of resources.
- **Method and path**:
  - Single: `GET /api/v1/users/{id}`
  - Collection: `GET /api/v1/users`
- **What to document**:
  - Path parameters and query parameters (`page`, `limit`, `sort`, `filter`)
  - Pagination structure (`total`, `page`, `pageSize`, `items`)
  - Success response (`200 OK`)
  - Not found behavior (`404 Not Found`)

### Update (PUT or PATCH)

- **Purpose**: Modify existing resources.
- **Method and path**:
  - Full update: `PUT /api/v1/users/{id}`
  - Partial update: `PATCH /api/v1/users/{id}`
- **What to document**:
  - Difference between PUT (replace) and PATCH (partial change)  - 
  - Concurrency controls (for example ETag or version fields, if used)
  - Success response (`200 OK` or `204 No Content`)
  - Validation and conflict errors (`400`, `409`)

### Delete (DELETE)

- **Purpose**: Remove or deactivate a resource.
- **Method and path**: `DELETE /api/v1/users/{id}`
- **What to document**:
  - Whether delete is hard delete or soft delete
  - Success response (`204 No Content` commonly)
  - Idempotent behavior (repeated delete request outcome)
  - Not found behavior (`404 Not Found`) and authorization errors (`403 Forbidden`)

### Quick CRUD reference

| Operation | Method | Example endpoint | Typical success code |
|----------|--------|------------------|----------------------|
| Create | POST | `/api/v1/users` | 201 |
| Read | GET | `/api/v1/users/{id}` | 200 |
| Update | PUT/PATCH | `/api/v1/users/{id}` | 200 or 204 |
| Delete | DELETE | `/api/v1/users/{id}` | 204 |

## Example endpoint documentation

### Get user by ID

- **Method**: `GET`
- **URL**: `/api/v1/users/{id}`
- **Authentication**: Bearer token required

#### Path parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id | string | Yes | Unique user identifier |

#### Request example

```bash
curl -X GET "https://api.example.com/api/v1/users/123" \
  -H "Authorization: Bearer <token>"
```

#### Success response (200)

```json
{
  "id": "123",
  "name": "Ranjeet Kumar",
  "email": "ranjeet@example.com",
  "status": "active"
}
```

#### Error response (404)

```json
{
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "No user found with id 123"
  }
}
```

## Child topic: Documenting POST endpoints

When documenting `POST` endpoints, focus on input validation, required fields, and possible creation errors.

Read the child topic for a complete walkthrough and example:

- [How to document POST endpoints](How-to-document-POST-endpoints.html)

## Child topic: Documenting GET endpoints

When documenting `GET` endpoints, focus on path/query parameters, filtering, sorting, and pagination behavior.

Read the child topic for a complete walkthrough and example:

- [How to document GET endpoints](How-to-document-GET-endpoints.html)

## Child topic: Documenting UPDATE endpoints

When documenting `PUT` and `PATCH` endpoints, clearly define replace vs partial update behavior and conflict handling.

Read the child topic for a complete walkthrough and example:

- [How to document UPDATE endpoints](How-to-document-UPDATE-endpoints.html)

## Child topic: Documenting DELETE endpoints

When documenting `DELETE` endpoints, explain hard delete vs soft delete, idempotency, and authorization rules.

Read the child topic for a complete walkthrough and example:

- [How to document DELETE endpoints](How-to-document-DELETE-endpoints.html)

## Best practices for writing API docs

- Use consistent terminology and field names across all endpoints.
- Add realistic examples that developers can copy and test.
- Document validation rules (length, format, allowed values).
- Keep docs versioned with the API (`v1`, `v2`, and so on).
- Update documentation in the same pull request as code changes.

## Suggested documentation workflow

1. Define a documentation template for all endpoints.
2. Write docs during development, not after release.
3. Review docs in code review for completeness.
4. Publish changelogs for breaking and non-breaking updates.