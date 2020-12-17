<?php

namespace App\Services\Helper;

use App\Model\PaginatedRequestModel;
use Doctrine\ORM\EntityManagerInterface;

class PaginationHelper
{
    /** @var PaginatedRequestModel */
    private $requestModel;
    /** @var EntityManagerInterface */
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function setRequestModel(PaginatedRequestModel $requestModel): void
    {
        $this->requestModel = $requestModel;
    }

    public function getResponse(): array
    {
        $offset = $this->requestModel->getRowsPerPage() * ($this->requestModel->getCurrentPage() - 1);
        $qb = $this->requestModel->getQueryBuilder();
        if (is_string($qb)) {
            $qb .= sprintf(' LIMIT %d OFFSET %d', $this->requestModel->getRowsPerPage(), $offset);
            $this->requestModel->setRows($this->em->getConnection()->fetchAll($qb));
        } else {
            $qb->setFirstResult($offset)
                ->setMaxResults($this->requestModel->getRowsPerPage());
            $this->requestModel->setRows($qb->getQuery()->getArrayResult());
        }

        return $this->requestModel->serialize();
    }
}