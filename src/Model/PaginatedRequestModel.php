<?php

namespace App\Model;

use Doctrine\ORM\QueryBuilder;

class PaginatedRequestModel
{
    private $queryBuilder;
    private $sortBy;
    private $sortOrder;
    private $rows;
    private $currentPage;
    private $user;
    private $rowsPerPage;

    public function getQueryBuilder()
    {
        return $this->queryBuilder;
    }

    public function setQueryBuilder($queryBuilder): self
    {
        $this->queryBuilder = $queryBuilder;

        return $this;
    }

    public function getSortBy(): ?string
    {
        return $this->sortBy;
    }

    public function setSortBy(?string $sortBy): self
    {
        $this->sortBy = $sortBy;
        if (!$sortBy) {
            $this->sortBy = 'id';
        }

        return $this;
    }

    public function getSortOrder(): ?string
    {
        return $this->sortOrder;
    }

    public function setSortOrder(?string $sortOrder): self
    {
        $this->sortOrder = $sortOrder;
        if (!$sortOrder) {
            $this->sortOrder = 'desc';
        }

        return $this;
    }

    public function getRows(): ?array
    {
        return $this->rows;
    }

    public function setRows(?array $rows): self
    {
        $this->rows = $rows;

        return $this;
    }

    public function getCurrentPage(): ?int
    {
        return $this->currentPage;
    }

    public function setCurrentPage(?int $currentPage): self
    {
        $this->currentPage = $currentPage;
        if (!$currentPage) {
            $this->currentPage = 1;
        }

        return $this;
    }

    public function getUser(): ?int
    {
        return $this->user;
    }

    public function setUser(?int $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getRowsPerPage(): ?int
    {
        return $this->rowsPerPage;
    }

    public function setRowsPerPage(?int $rowsPerPage): self
    {
        $this->rowsPerPage = $rowsPerPage;
        if (!$rowsPerPage) {
            $this->rowsPerPage = 10;
        }

        return $this;
    }

    public function serialize(): array
    {
        return
            [
                'rows' => $this->rows,
                'sortOrder' => $this->sortOrder,
                'currentPage' => $this->currentPage
            ];
    }
}